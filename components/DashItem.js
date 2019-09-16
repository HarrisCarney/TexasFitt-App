import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import WorkoutDetails from '../screens/WorkoutDetailScreen';

export default class DashItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.dashItem} onPress={ () => this.props.navigation.navigate('WorkoutDetails', {}) }>
        <Image style={styles.dashImage} source={this.props.image} resizeMode="cover"/>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subTitle}>{this.props.subTitle} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dashItem: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    height: 200,
    backgroundColor: '#5b5',
    justifyContent: 'flex-end',
  },
  title:{
    fontFamily: 'sofia-black',
    fontSize: 28,
    color: '#fff',
    marginLeft: 20,
  },
  subTitle: {
    fontFamily: 'sofia-semi',
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 20
  },
  dashImage: {
    position: 'absolute',
    width: '100%',
    height: 200,
    borderRadius: 12,
  }
});


