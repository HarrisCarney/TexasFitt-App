import React from 'react';
import { View, ScrollView, StyleSheet, ListView } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';
import NewsItem from '../components/NewsItem';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      newsList: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
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
          newsList: this.state.newsList.cloneWithRows(test),
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

          <ListView
            dataSource={this.state.newsList}
            renderRow={this.renderItem.bind(this)}
          />

        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <NewsItem navigation={this.props.navigation} title={item.title} info={item.info} date={item.date} image={item.image}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
