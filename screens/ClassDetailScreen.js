import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { firebaseDB } from '../api'

import ScreenHeader from '../components/ScreenHeader';
import ClassItem from '../components/ClassItem';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1.5);
const imageWidth = dimensions.width;

export default class ClassScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.name,
      time: this.props.navigation.state.params.time,
      id: this.props.navigation.state.params.id,
      classInfo: {}
    };
  };

  async getClassDetails() {
    firebaseDB.collection('classes').where("classID", "==", this.state.id).onSnapshot(function(doc) {
      var classDetails = {};
      doc.forEach((details) => {
        classDetails = { description: details.data().desc, instructor: details.data().instructor };
      });
      // AsyncStorage.setItem('classDetails/' + this.state.id, JSON.stringify(classDetails));
      this.setState({
        classInfo: {description: classDetails.description, instructor: classDetails.instructor }
      });
    }.bind(this));
  }

  async componentDidMount() {
    // const infoStorage = await AsyncStorage.getItem('classDetails/'+this.state.id);
    // if(infoStorage != null) {
    //   var store = JSON.parse(infoStorage);
    //   this.setState({
    //     classInfo: {description: store.description, instructor: store.instructor }
    //   });
    // } else {
    //   console.log('API Called')
    //   this.getClassDetails();
    // }
    this.getClassDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.classPic} source={require('../assets/images/classes/Zumba.png')} />
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/icons/ic_back.png')}
          />
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.classInfo}>
            <View style={styles.timeView}>
              <Text style={styles.time}>{this.state.time.includes('am') ? this.state.time.split('am')[0] : this.state.time.split('pm')[0]}</Text>
              <Text style={styles.timePeriod}>{this.state.time.includes('am') ? 'AM' : 'PM'}</Text>
            </View>
            <View style={styles.classTitle}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.instructor}>{this.state.classInfo.instructor}</Text>
            </View>
          </View>
          <Text style={styles.description}>{this.state.classInfo.description}</Text>
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
  classPic: {
    width: imageWidth,
    height: imageHeight,
    position: 'absolute'
  },
  classInfo: {
    marginTop: imageHeight - 120,
    marginLeft: 80,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#383838',
    height: 80,
  },
  timeView: {
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
    flexWrap: 'wrap'
  },
  time: {
    fontFamily: 'sofia-semi',
    fontSize: 24,
    color: '#333',
  },
  timePeriod: {
    fontFamily: 'sofia-semi',
    fontSize: 16,
    color: '#333',
  },
  classTitle: {
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
  instructor: {
    fontFamily: 'sofia-semi',
    fontSize: 16,
    marginLeft: 20,
    color: '#fff',
  },
  description: {
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
