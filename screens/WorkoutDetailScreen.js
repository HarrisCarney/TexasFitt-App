import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';

export default class WorkoutDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <ScreenHeader>Workout of the Day</ScreenHeader>
    );
  }
}

const styles = StyleSheet.create({

});
