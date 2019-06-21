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
        <View>
          <Text {...this.props} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',
      height: 120,
      justifyContent: 'flex-end'
    },
    title: {
      fontSize: 40,
      fontFamily: 'sofia-bold',
      marginLeft: 20
    }
  });


