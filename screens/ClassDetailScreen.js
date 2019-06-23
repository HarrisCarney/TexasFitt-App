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
      classList: [],
      name: this.props.navigation.state.params.name,
      time: this.props.navigation.state.params.time,
      id: this.props.navigation.state.params.id,
    };
  };

  getClasses() {
    firebaseDB.collection('classes').where("classID", "==", this.state.id).get().then(function(doc) {
      var test = {};
      doc.forEach((classDay) => {
        test = { description: classDay.data().desc, instructor: classDay.data().instructor };
      });
      this.setState({
        description: test.description,
        instructor: test.instructor
      }, () => {
        console.log(this.state.description);
        console.log(this.state.instructor);
      });
    }.bind(this));
  }

  componentDidMount() {
    this.getClasses();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader>{this.state.name}</ScreenHeader>

        <View>
          <Text>{this.state.instructor}</Text>
          <Text>{this.state.description}</Text>
        </View>
      </View>
    );
  }

  renderItem(item) {
    return (
      <ClassItem navigation={this.props.navigation} time={item.time} name={item.name}/>
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
