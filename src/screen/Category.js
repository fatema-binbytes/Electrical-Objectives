/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import {questionData} from '../store/action';
import Button from '../component/button';
import styles from './styles/category-style';
import colors from '../config/colors';
import PopupDialog from '../component/PopupDialog';
import Start from '../screen/Start';
import {SlideAnimation} from 'react-native-popup-dialog';
class Category extends Component {
  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
    this.state = {
      show: false,
      title: '',
      category_id: '',
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }
  start(question_no) {
    this.setState({show: false});
    const params = {
      title: this.state.title,
      category_id: this.state.category_id,
      question_no: question_no,
      isBookmark: false,
    };
    setTimeout(() => {
      this.nav.navigate('Question', params);
    }, 50);
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={colors.accent_color} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={this.props.data}
            renderItem={({item}) => (
              <Button
                txt={{fontSize: 16}}
                title={item.category_name}
                onPress={() =>
                  this.setState({
                    show: true,
                    title: item.category_name,
                    category_id: item.id,
                  })
                }
              />
            )}
          />
          <PopupDialog
            dialogTitle={this.state.title}
            visible={this.state.show}
            onPress={no => this.start(no)}
            onTouchOutside={() => {
              this.setState({show: false});
            }}
            animation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }>
            <Start onClick={no => this.start(no)} title={this.state.title} />
          </PopupDialog>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.questionData.category,
  info: state.user.info,
  isLoading: state.ui.IsLoading,
});
const mapDispatchToProps = {
  getCategories: questionData.getCategories,
};

const CategoryWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);

export default CategoryWrapper;
