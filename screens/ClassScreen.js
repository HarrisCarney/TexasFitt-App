import React from 'react';
import { Text, View, ScrollView, StyleSheet, ListView } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';
import ClassItem from '../components/ClassItem';

export default class ClassScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  };

  getClasses() {
    firebaseDB.collection('test2').get().then(function(doc) {
      var classList = [];
      doc.forEach((classDay) => {
        classDay.data().classes.forEach((classItem) => {
          classList.push({
            name: classItem.name,
            time: classItem.time,
            id: classItem.classID
          });
        })
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(classList)
      }, () => {
        console.debug('✓ State successfully set!')
      });
    }.bind(this));
  }

  componentDidMount() {
    this.getClasses();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader>Classes</ScreenHeader>

        <ScrollView>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}/>
        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <ClassItem>{item.name} {item.time}</ClassItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  class: {
    marginLeft: 20,
    marginRight: 20,
    height: 80,
    backgroundColor: '#FFBE41',
    color: '#ffffff'
  }
});
