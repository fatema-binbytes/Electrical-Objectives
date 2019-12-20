import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import firebase from 'react-native-firebase';
import styles from './styles/login-style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    if (this.state.loading) {
      return this.loadingView();
    } else {
      return this.loginView();
    }
  }

  loginView() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={require('../assets/flash.png')} />
          <Text style={styles.txt}>Please sign in to continue</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._signIn()}>
            <Text style={styles.buttonText}>{'Sign in with Google'}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  loadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} size={'large'} />
      </View>
    );
  }
  _signIn = async () => {
    try {
      await GoogleSignin.configure();
      const userInfo = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      const user = userInfo.user;
      const body = {
        name: user.name,
        g_id: user.id,
        email: user.email,
        profile_url: user.photo,
      };
      this.props.onLogin(body);
      const credential = firebase.auth.GoogleAuthProvider.credential(
        token.idToken,
        token.accessToken,
      );
      const firebaseUserCredential = await firebase
        .auth()
        .signInWithCredential(credential);
      console.log(firebaseUserCredential);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Login;
