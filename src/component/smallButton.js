import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles/smallButton-style';

class SmallButton extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Icon name={this.props.icon} size={30} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SmallButton;
