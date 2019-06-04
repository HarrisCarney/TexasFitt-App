import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ScreenHeader from '../components/ScreenHeader';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
