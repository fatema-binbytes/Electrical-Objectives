import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {Bubbles} from 'react-native-loader';
import style from './styles/splash-style';
import colors from '../config/colors';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 1000);
  }
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor={'#fff'} />
        <View style={style.header}>
          <Image source={require('../assets/electrical.png')} />
          <Text style={style.logoText}>Electrical Objective</Text>
        </View>
        <View style={style.bubble}>
          <Bubbles size={10} color={colors.dark_primary_color} />
        </View>
      </View>
    );
  }
}
export default Splash;
