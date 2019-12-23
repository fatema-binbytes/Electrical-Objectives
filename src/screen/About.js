import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles/about-style';

const instructions =
  'App contains electrical objectives of generation transmission & distribution, power system.\n\n' +
  'The app is useful for those who preparing for competitive exam of electrical engineering specially for goverment examination like PGVCL, UGVCL, MGVCL, DGVCL, GETCO \n\n' +
  'It contains more than 3000 electrical questions/mcqs of generation tramission & distribution, power system. \n\n' +
  'Also helpful for electrical interview technical questions,electrical engineering technical interview questions, mcq preparation for engineering competitive exams and electronics interview question.';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.imgView}>
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/flash.png')}
            />
          </View>
          <Text style={styles.heading}>Electrical Objectives</Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.txt}>{instructions}</Text>
        </View>
      </View>
    );
  }
}
export default About;
