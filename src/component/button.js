import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import styles from './button-style';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.button, this.props.style]}
          onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
