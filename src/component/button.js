import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles/button-style';

class Button extends Component {
  render() {
    const {style, onPress, txt, title} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
          <Text style={[styles.buttonText, txt]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Button;
