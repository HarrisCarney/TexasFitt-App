import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import NewsDetails from '../screens/NewsDetailScreen';

export default class NewsItem extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('NewsDetails', {title: this.props.title, info: this.props.info, date: this.props.date, image: this.props.image})}>
        <View style={styles.newsCard}>
          <Image style={styles.newsImage} source={{uri: this.props.image}} resizeMode="cover"/>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.info} numberOfLines={1}> {this.props.info}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  newsCard: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 12,
    height: 200,
    backgroundColor: '#fefefe',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'sofia-black',
    fontSize: 28,
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.40)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6
  },
  info: {
    fontFamily: 'sofia-semi',
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  newsImage: {
    position: 'absolute',
    width: '100%',
    height: 200,
    borderRadius: 12,
  }
});


