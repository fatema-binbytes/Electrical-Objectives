import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

export default class Favorite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name={this.props.name} color={colors.accent_color} size={24} />
      </TouchableOpacity>
    );
  }
}
