import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';
import NewsItem from '../components/NewsItem';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    constructor(props) {
    super(props);
    this.state = {
      newsList: []
    };
  };

  getNews() {
    firebaseDB.collection('news').orderBy("date_created", "desc").limit(10).get().then(function(doc) {
      var test = [];
      doc.forEach((tom) => {
        test.push({
            title: tom.data().title,
            info: tom.data().info,
            date: tom.data().date_created,
            image: tom.data().image,
          });
      });
      this.setState({
          newsList: test,
        });
    }.bind(this));
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    return (
      <View>
        <ScreenHeader>News</ScreenHeader>
        <ScrollView>

          <FlatList
            data={this.state.newsList}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />

        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <NewsItem key={item.id} navigation={this.props.navigation} title={item.title} info={item.info} date={item.date} image={item.image}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
