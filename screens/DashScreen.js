import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import * as firebase from 'firebase';

import ScreenHeader from '../components/ScreenHeader';

export default class DashScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Good Morning,{"\n"}Harris</Text>
          <Image style={styles.profilePic} source={require('../assets/images/user.png')} />
        </View>  

        <View style={styles.checkIn}>
          <Text style={styles.checkInTitle}>Weekly Check-Ins</Text>
          <Text style={styles.checkInCount}>20</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkIn: {
    margin: 20,
    backgroundColor: '#fefefe',
    height: 80,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  checkInTitle: {
    fontFamily: 'sofia-semi',
    fontSize: 14,
    color: '#333',

  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 160,
  },
  userName: {
    fontSize: 35,
    fontFamily: 'sofia-bold',
    marginLeft: 20,
  },
  profilePic: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 20,
    marginBottom: 10
  },
  header: {
    height: 150,
    justifyContent: 'flex-end'
  },
});
