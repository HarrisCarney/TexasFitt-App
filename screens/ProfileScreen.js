import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import * as firebase from "firebase";

import ScreenHeader from '../components/ScreenHeader';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigate('Auth');
    } catch (e) {
        console.log(e);
    }
}

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader>Profile</ScreenHeader>
        <ScrollView>

        <Button title="Log Out" onPress={this.signOutUser} />
        
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