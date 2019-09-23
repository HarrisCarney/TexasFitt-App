import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { AppLoading, Icon } from 'expo';
import * as Font from 'expo-font';
import * as Asset from 'expo-asset';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    // assetsLoaded: false
  };

  async componentDidMount() {
    // this.loadAssets();
    this.loadFonts();
  };

  async loadFonts() {
    await Font.loadAsync({
        'sofia-semi': require('./assets/fonts/SofiaPro-SemiBold.ttf'),
        'sofia-bold': require('./assets/fonts/SofiaPro-Bold.ttf'),
        'sofia-black': require('./assets/fonts/SofiaPro-Black.ttf'),
        'poppins-semi': require('./assets/fonts/Poppins-SemiBold.otf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      });

      this.setState({fontsLoaded: true});
  }

  // async loadAssets() {
  //   await Asset.loadAsync([
  //       require('./assets/images/tf_logo.png'),
  //       require('./assets/icons/ic_dash.png'),
  //       require('./assets/icons/ic_dash-active.png'),
  //       require('./assets/icons/ic_classes.png'),
  //       require('./assets/icons/ic_classes-active.png'),
  //       require('./assets/icons/ic_news.png'),
  //       require('./assets/icons/ic_news-active.png'),
  //       require('./assets/icons/ic_profile.png'),
  //       require('./assets/icons/ic_profile-active.png'),
  //       require('./assets/icons/ic_back.png'),
  //       // Delete these before production
  //       require('./assets/images/classes/Zumba.png'),
  //       require('./assets/images/workout.png'),
  //       require('./assets/images/news.png'),
  //     ]);

  //   this.setState({assetsLoaded: true});
  // }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    } else {
      return(
        <ActivityIndicator />
      );
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
