/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {SlideAnimation} from 'react-native-popup-dialog';
import {connect} from 'react-redux';
import codePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import {user} from '../store/action';
import colors from '../config/colors';
import route from '../utils/route';
import Button from '../component/homeButton';
import PopupDialog from '../component/PopupDialog';
import homeStyle from './styles/home-style';
import Login from '../component/login';

class Home extends Component {
  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
    this.signUpDialog = React.createRef();
    this.state = {
      show: false,
    };
    OneSignal.init('4b11b264-0835-4cfe-a015-735452972dfa');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  componentDidMount() {
    this.checkUpdate();
  }
  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  checkUpdate() {
    codePush.sync();
  }
  bookmark = () => {
    if (this.props.info === null) {
      this.setState({show: true});
    } else {
      this.props.data === null
        ? route.back(this.nav)
        : this.nav.navigate('Question', {
            title: 'Bookmark',
            question_no: '1',
            isBookmark: true,
          });
    }
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <StatusBar backgroundColor={colors.dark_primary_color} />
        <PopupDialog
          visible={this.state.show}
          animation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          onTouchOutside={() => {
            this.setState({show: false});
          }}>
          <Login
            onLogin={body => {
              this.props.login(body);
              this.setState({show: false});
            }}
          />
        </PopupDialog>
        <View style={homeStyle.header}>
          <Image
            style={homeStyle.headerLogo}
            source={require('../assets/flash.png')}
          />
        </View>
        <View style={homeStyle.content}>
          <Button
            onPress={() => this.nav.navigate('Category')}
            icon={'lightbulb-on'}
            style={{backgroundColor: '#db566e', borderColor: '#db3755'}}
            lable={'Quiz'}
          />
          <Button
            onPress={this.bookmark}
            icon={'bookmark'}
            style={{backgroundColor: '#3672d1', borderColor: '#0d5ddb'}}
            lable={'Bookmark'}
          />
          <Button
            onPress={() => this.nav.navigate('About')}
            lable={'About'}
            style={{backgroundColor: '#619654', borderColor: '#3b9624'}}
            icon={'script-text'}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.questionData.question,
  info: state.user.info,
});
const mapDispatchToProps = {
  login: user.userLogin,
};

const HomeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeWrapper;
