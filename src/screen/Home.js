import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import {user} from '../store/action';
import colors from '../config/colors';
import route from '../utils/route';
import Button from '../component/button';
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
