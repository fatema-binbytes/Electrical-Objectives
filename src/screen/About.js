import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles/about-style';

const instructions =
  ' This app is useful for those preparing for competitive exam for electrical engineering specially for gujarat examination like PGVCL, UGVCL, MGVCL, DGVCL, GETCO \n\n' +
  'It contains electrical more than 3000 questions/mcqs about generation tramission & distribution, power system.';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>{instructions}</Text>
      </View>
    );
  }
}
export default About;
