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
import DashItem from '../components/DashItem';
import NewsItem from '../components/NewsItem';

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
      <ScrollView style={styles.container}>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Good Morning,{"\n"}Harris</Text>
          <Image style={styles.profilePic} source={require('../assets/images/user.png')} />
        </View>

        <View style={styles.checkIn}>
          <Text style={styles.checkInTitle}>Weekly Check-Ins</Text>
          <Text style={styles.checkInCount}>20</Text>
        </View>

        <Text style={styles.itemTitle}>Workout of the Day</Text>
        <DashItem navigation={this.props.navigation} title={"TODAY'S\nWORKOUT"} subTitle={"Full Body - Core Focused"} image={require('../assets/images/workout.png')}>
        </DashItem>

        <Text style={styles.itemTitle}>Latest News</Text>
        <DashItem title={"AEROBICS ROOM\nUPDATED"} subTitle={"We’re excited to introduce the new aerobics room to..."} image={require('../assets/images/news.png')}>
        </DashItem>
      </ScrollView>
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
  },
  itemTitle: {
    fontFamily: 'sofia-black',
    fontSize: 20,
    marginLeft: 24,
    marginBottom: 10,
    marginTop: 20,
    color: '#222'
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
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 20,
    marginBottom: 20
  },
  header: {
    height: 150,
    justifyContent: 'flex-end'
  },
  dashImage: {
    width: 100,
  }
});
