import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ScreenHeader from '../components/ScreenHeader';

export default class ClassScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader>Classes</ScreenHeader>

        <ScrollView>
         <View>
          <Text>Monday</Text>
          <Text>9:00am Zumba</Text>
         </View>
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
