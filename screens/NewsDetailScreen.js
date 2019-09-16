import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1.5);
const imageWidth = dimensions.width;

export default class NewsDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.title,
      info: this.props.navigation.state.params.info,
      image: this.props.navigation.state.params.image
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.newsImage} source={{uri: this.state.image}} resizemode="cover"/>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/icons/ic_back.png')}
          />
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.newsItem}>
            <View style={styles.newsTitle}>
              <Text style={styles.name}>{this.state.title}</Text>
            </View>
          </View>
          <Text style={styles.info}>{this.state.info}</Text>
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
  backButton: {
    marginLeft: 20,
    marginTop: 40,
  },
  newsImage: {
    width: imageWidth,
    height: imageHeight,
    position: 'absolute'
  },
  newsItem: {
    marginTop: imageHeight - 120,
    flexDirection: 'row',
    backgroundColor: '#383838',
    height: 80,
  },
  newsTitle: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'sofia-semi',
    fontSize: 22,
    marginLeft: 20,
    color: '#fff',
  },
  info: {
    fontFamily: 'sofia-semi',
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fcfcfc',
    padding: 20,
    lineHeight: 40,
  }
});
