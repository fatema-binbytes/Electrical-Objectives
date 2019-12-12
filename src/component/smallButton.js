import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles/smallButton-style';

class SmallButton extends Component {
  render() {
    let extraStyle;

    if (this.props.isLeft) {
      extraStyle = {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
      };
    } else {
      extraStyle = {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
      };
    }

    return (
      <View style={[styles.container, extraStyle]}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SmallButton;
