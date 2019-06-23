import React from 'react';
import { Text, View, ScrollView, StyleSheet, ListView, SectionList } from 'react-native';
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
      classList: []
    };
  };

  getClasses() {
    firebaseDB.collection('classSchedule').orderBy("dayNumber", "asc").get().then(function(doc) {
      var what = [];
      doc.forEach((classDay) => {
        var test = { title: classDay.data().day, data: [] };
        classDay.data().classes.forEach((classItem) => {
          test.data.push({
            name: classItem.name,
            time: classItem.time,
            id: classItem.classID
          });
        })
        what.push(test);
      });
      this.setState({
          classList: what
        }, () => {
          console.log(this.state.classList);
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
          <SectionList
            style={styles.classList}
            renderItem={({item, index, section}) => this.renderItem(item)}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            sections={this.state.classList}
            keyExtractor={(item, index) => item + index}
          />
        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <ClassItem time={item.time} name={item.name}/>
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
  },
  header: {
    fontFamily: 'sofia-semi',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  classList: {
    marginTop: 0
  }
});
