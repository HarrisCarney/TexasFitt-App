import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ScreenHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text {...this.props} style={this.props.style, styles.title} />
      </View>
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


