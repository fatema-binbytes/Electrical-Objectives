import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import styles from './styles/homeButton-style';

class Button extends Component {
  render() {
    const {lable, style, icon, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <Icon name={icon} size={50} color={colors.text_primary_color} />
        <Text style={styles.txt}>{lable}</Text>
      </TouchableOpacity>
    );
  }
}
export default Button;
