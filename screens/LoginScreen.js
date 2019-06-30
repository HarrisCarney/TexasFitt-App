import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

const dimensions = Dimensions.get('window');
const imageWidth = (dimensions.width * 0.6);

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '', 
      errorMessage: null
    };
  };

  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Image style={styles.logo} resizeMode="contain" source={require('../assets/images/tf_logo.png')} />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <View style={styles.loginInput}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    width: imageWidth,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#4BFF28',
    borderWidth: 0,
    borderBottomWidth: 2,
    margin: 20,
    fontSize: 16,
    fontFamily: 'sofia-semi',
    color: '#333'
  },
  loginInput: {
    width: '100%',
    alignItems: 'center'
  },
  loginButton: {
    width: '80%',
    height: 60,
    backgroundColor: '#4BFF28',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#000',
    fontFamily: 'sofia-bold',
    fontSize: 20,
  }
})