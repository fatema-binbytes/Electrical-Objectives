import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './header-style';

class Header extends Component {
  render() {
    return this.props.icon ? this._withIcon() : this._withoutIcon();
  }

  _withIcon() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>{this.props.title}</Text>
        <View style={style.iconContainer}>
          <TouchableOpacity onPress={this.props.onIconClick}>
            <Icon
              style={style.icon}
              size={24}
              color={'#fff'}
              name={this.props.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _withoutIcon() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}
export default Header;
