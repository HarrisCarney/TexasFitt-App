import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ClassItem extends React.Component {
  render() {
    return (
      <TouchableHighlight>
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
    backgroundColor: '#FFBE41',
    flexDirection: 'row',
    alignItems: 'center',
  },
  classText: {
    color: '#fff',
    fontFamily: 'sofia-semi',
    fontSize: 18,
    marginLeft: 20
  },
  classTime: {

  },
  className: {

  }
});


