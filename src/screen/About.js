import React, {Component} from 'react';
import {View, Image, StatusBar, Text} from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={{margin: 16}}>
        <Text style={{fontSize: 18, marginBottom: 16}}>
          This app is useful for those preparing for competitive exam for
          electrical engineering specially for gujarat examination like PGVCL,
          UGVCL, MGVCL, DGVCL, GETCO
        </Text>
        <Text style={{fontSize: 18}}>
          It contains electrical more than 3000 questions/mcqs about generation
          tramission & distribution, power system.
        </Text>
      </View>
    );
  }
}
export default About;
