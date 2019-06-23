import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import DashScreen from '../screens/DashScreen';

export default class ClassItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={ () => this.props.navigation.navigate('ClassDetails', {name: this.props.name, time: this.props.time, id: this.props.id})}>
        <View style={styles.classCard}>
          <Text style={[styles.classText, styles.classTime]}>{this.props.time}</Text>
          <Text style={[styles.classText, styles.className]}> {this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  classCard: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 4,
    height: 80,
    backgroundColor: '#fdfdfd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  classText: {
    color: '#333',
    fontFamily: 'sofia-semi',
    fontSize: 18,
    marginLeft: 20
  },
  classTime: {

  },
  className: {

  }
});


