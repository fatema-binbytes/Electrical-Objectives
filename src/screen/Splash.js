import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import style from './splash-style';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor={'#fff'} />
        <View style={style.header}>
          <Text style={style.logoText}>Electrical Objective</Text>
        </View>
      </View>
    );
  }
}
