import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    constructor(props) {
    super(props);
    this.state = {
      classList: []
    };
  };

  getNews() {
    firebaseDB.collection('news').orderBy("date_created", "desc").limit(10).get().then(function(doc) {
      doc.forEach((tom) => {
        console.log(tom.data().title);
      });
      // this.setState({
      //     classList: what
      //   });
    }.bind(this));
  }

  componentDidMount() {
    this.getNews();
  }
  render() {
    return (
      <View>
        <ScreenHeader>News</ScreenHeader>
        <ScrollView style={styles.container}>
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
