import React, {Component} from 'react';
import {View, StatusBar, TextInput, Text, Keyboard} from 'react-native';

import Button from '../component/button';

import style from './start-style';

class Start extends Component {
  static navigationOptions = ({navigation}) => {
    const data = navigation.state.params;
    return {
      title: `${data.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
    this.state = {
      question_no: '1',
    };
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.labelText}>Start From : </Text>
          <TextInput
            keyboardType={'numeric'}
            value={this.state.question_no}
            onChangeText={text => this.setState({question_no: text})}
          />
          <Button title={'Start'} onPress={this.start} />
        </View>
      </View>
    );
  }

  start = () => {
    Keyboard.dismiss();
    const params = {
      title: this.nav.state.params.title,
      category_id: this.nav.state.params.category_id,
      question_no: this.state.question_no !== '' ? this.state.question_no : '1',
      isBookmark: false,
    };
    this.nav.navigate('Question', params);
  };
}
export default Start;
