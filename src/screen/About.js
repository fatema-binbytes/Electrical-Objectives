import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles/about-style';
import colors from '../config/colors';

const instructions =
  'App contains electrical objectives of generation transmission & distribution, power system.\n\n' +
  'The app is useful for those who preparing for competitive exam of electrical engineering specially for goverment examination like PGVCL, UGVCL, MGVCL, DGVCL, GETCO \n\n' +
  'It contains more than 3000 electrical questions/mcqs of generation tramission & distribution, power system. \n\n' + 
  'Also helpful for electrical interview technical questions,electrical engineering technical interview questions, mcq preparation for engineering competitive exams and electronics interview question.';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 0.7}}>
          <View
            style={{
              // backgroundColor: colors.light_primary_color,
              padding: 15,
              borderRadius: 100,
            }}>
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/flash.png')}
            />
          </View>
          <Text
            style={{
              padding: 10,
              fontSize: 22,
              color: colors.dark_primary_color,
            }}>
            Electrical Objectives
          </Text>
        </View>
        <View style={{alignItems: 'center', flex: 1,}}>
          <Text style={styles.txt}>{instructions}</Text>
        </View>
      </View>
    );
  }
}
export default About;
