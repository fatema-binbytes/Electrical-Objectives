import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import HTMLView from 'react-native-htmlview';

import styles from './styles/option-style';

class Option extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          ref={'option'}
          style={[styles.container, this.props.style]}
          onPress={this.props.onPress}>
          <View style={styles.optionTxtView}>
            <Text style={styles.labelText}>{this.props.optionText}</Text>
          </View>
          <View style={styles.htmlView}>
            <HTMLView stylesheet={answersHtmlStyles} value={this.props.text} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const answersHtmlStyles = StyleSheet.create({
  p: {
    fontSize: 14,
  },
});
export default Option;
