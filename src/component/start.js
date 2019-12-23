import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, Keyboard} from 'react-native';

import styles from './styles/start-style';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_no: 1,
      open: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title} />
        <View style={styles.header}>
          <Text style={styles.labelText}>Start From:</Text>
          <TextInput
            ref={input => {
              this.textInput = input;
            }}
            onSubmitEditing={() => {
              this.setState({open: false});
            }}
            keyboardType={'numeric'}
            value={this.state.question_no.toString()}
            onChangeText={text => this.setState({question_no: parseInt(text)})}
          />
        </View>
        <View style={styles.btnStart}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              this.props.onClick(
                this.state.question_no !== '' ? this.state.question_no : '1',
              );
            }}>
            <Text style={styles.btnTxt}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Start;
