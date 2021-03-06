import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import HTMLView from 'react-native-htmlview';

import styles from './option-style';

export default class Option extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          ref={'option'}
          style={[styles.container, this.props.style]}
          onPress={this.props.onPress}>
          <View
            style={{justifyContent: 'center', marginLeft: 4, marginRight: 4}}>
            <Text style={styles.labelText}>{this.props.optionText}</Text>
          </View>
          <View style={{marginLeft: 8}}>
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
