import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import DashScreen from '../screens/DashScreen';
import ClassScreen from '../screens/ClassScreen';
import ClassDetailScreen from '../screens/ClassDetailScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DashStack = createStackNavigator({
  Dash: DashScreen,
});

DashStack.navigationOptions = {
  tabBarLabel: 'Dash',
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
    labelStyle: {
      fontFamily: 'sofia-semi',
      fontSize: 12,
    },
    iconStyle: {
      marginBottom: -3
    }
  },
  tabBarIcon: ({ focused }) => (
    focused ? <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_dash-active.png')}/> : 
    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_dash.png')}/>
  )
};

const ClassStack = createStackNavigator({
  Classes: ClassScreen,
  ClassDetails: ClassDetailScreen
});

ClassStack.navigationOptions = {
  tabBarLabel: 'Classes',
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
    labelStyle: {
      fontFamily: 'sofia-semi',
      fontSize: 12
    },
    iconStyle: {
      marginBottom: -3
    }
  },
  tabBarIcon: ({ focused }) => (
    focused ? <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_classes-active.png')}/> : 
    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_classes.png')}/>
  ),
};

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
    labelStyle: {
      fontFamily: 'sofia-semi',
      fontSize: 12
    },
    iconStyle: {
      marginBottom: -3
    }
  },
  tabBarIcon: ({ focused }) => (
    focused ? <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_news-active.png')}/> : 
    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_news.png')}/>
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
    labelStyle: {
      fontFamily: 'sofia-semi',
      fontSize: 12
    },
    iconStyle: {
      marginBottom: -3
    }
  },
  tabBarIcon: ({ focused }) => (
    focused ? <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_profile-active.png')}/> : 
    <Image style={{ width: 26, height: 26 }} source={require('../assets/icons/ic_profile.png')}/>
  ),
};

export default createBottomTabNavigator({
  DashStack,
  ClassStack,  
  NewsStack,
  ProfileStack,
});
