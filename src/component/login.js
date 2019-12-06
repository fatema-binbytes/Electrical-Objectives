import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import styles from './login-style';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={{
              height: 96,
              width: 96,
              resizeMode: 'center',
              marginBottom: 32,
            }}
            source={require('../assets/flash.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 16}}>
            Please sign in to continue
          </Text>
          <TouchableHighlight style={[styles.button, styles.google]}>
            <Text style={styles.buttonText}>{'Sign In'}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
