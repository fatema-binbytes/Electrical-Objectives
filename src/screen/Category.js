import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import {questionData} from '../store/action';
import Button from '../component/button';
import styles from './styles/category-style';
import colorsConfig from '../config/colors';

class Category extends Component {
  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
  }

  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={colorsConfig.accent_color} />
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.container}>
            <FlatList
              keyExtractor={(item, index) => `${index}`}
              data={this.props.data}
              renderItem={({item}) => (
                <Button
                  title={item.category_name}
                  onPress={() =>
                    this.nav.navigate('Start', {
                      title: item.category_name,
                      category_id: item.id,
                    })
                  }
                />
              )}
            />
          </View>
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
