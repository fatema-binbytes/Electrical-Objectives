import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

import Button from '../component/button';
import homeStyle from './home-style';
import colors from '../config/colors';

import Login from '../component/login';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });
    return (
      <View style={homeStyle.container}>
        <StatusBar backgroundColor={colors.dark_primary_color} />
        <PopupDialog ref={'signUpDialog'} dialogAnimation={slideAnimation}>
          <Login onLogin={() => this.refs.signUpDialog.dialog.dismiss()} />
        </PopupDialog>
        <View style={homeStyle.header}>
          <Image
            style={homeStyle.headerLogo}
            source={require('../assets/flash.png')}
          />
        </View>
        <View style={homeStyle.content}>
          <Button
            title="Get Started"
            onPress={() => this.nav.navigate('Category')}
          />
          <Button title="Bookmark" onPress={this.bookmark} />
          <Button
            title="About App"
            onPress={() => this.nav.navigate('About')}
          />
        </View>
      </View>
    );
  }
}
