import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

import {connect} from 'react-redux';

import {data} from '../store/action';
import SmallButton from '../component/smallButton';
import Favorite from '../component/favorite';
import Option from '../component/option';
import Login from '../component/login';

import styles from './question-style';
import colors from '../config/colors';

class Question extends Component {
  static navigationOptions = ({navigation}) => {
    const data = navigation.state.params;
    return {
      title: `${data.title}`,
      headerStyle: {
        backgroundColor: colors.default_primary_color,
      },
      headerTitleStyle: {
        color: colors.text_primary_color,
        fontSize: 16,
      },
      headerTintColor: colors.text_primary_color,
    };
  };

  constructor(props) {
    super(props);

    this.nav = this.props.navigation;
    this.question_no = this.nav.state.params.question_no;
    this.initialQuestionNo = this.nav.state.params.question_no;
    this.category_id = this.nav.state.params.category_id;
    this.state = {
      data: {
        id: 0,
        question_no: 1,
        question: '',
        opt1: '',
        opt2: '',
        opt3: '',
        opt4: '',
        correct_opt: 0,
        category_id: this.nav.state.params.category_id,
        favorite: false,
      },
      isLoading: true,
      style: {
        opt1: null,
        opt2: null,
        opt3: null,
        opt4: null,
      },
    };
  }

  componentDidMount() {
    this.props.loadQuestion(
      this.nav.state.params.isBookmark,
      this.question_no,
      this.category_id,
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return {data: nextProps.data};
    } else {
      return null;
    }
  }
  onSelect = value => {
    this.refs.rgView.setNativeProps({
      pointerEvents: 'none',
    });

    const style = this.state.style;

    if (String(value) === String(this.state.data.correct_opt)) {
      style[`opt${value}`] = styles.correct;
    } else {
      style[`opt${value}`] = styles.wrong;
      style[`opt${this.state.data.correct_opt}`] = styles.correct;
    }
    this.setState(style);
  };

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });
    return (
      <View style={styles.container}>
        <PopupDialog ref={'signUpDialog'} dialogAnimation={slideAnimation}>
          <Login onLogin={() => this.refs.signUpDialog.dialog.dismiss()} />
        </PopupDialog>
        <ScrollView>
          {this.props.isLoading ? (
            <ActivityIndicator color={colors.accent_color} size={'large'} />
          ) : (
            this.questionView()
          )}
        </ScrollView>
      </View>
    );
  }

  questionView() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.question}>
            <View style={styles.questionView}>
              <Text style={styles.questionLabelText}>Q.{this.question_no}</Text>
              <Favorite
                ref={'favorite'}
                name={this.state.data.favorite ? 'star' : 'star-o'}
                onPress={() => this.props.favorite(this.state.data.id)}
              />
            </View>
            <HTMLView value={this.state.data.question} />
          </View>
          <View ref={'rgView'}>
            <Text style={styles.optionLabelText}>OPTIONS</Text>
            <Option
              style={this.state.style.opt1}
              optionText={'A'}
              text={this.state.data.opt1}
              onPress={() => this.onSelect('1')}
            />
            <Option
              style={this.state.style.opt2}
              optionText={'B'}
              text={this.state.data.opt2}
              onPress={() => this.onSelect('2')}
            />
            <Option
              style={this.state.style.opt3}
              optionText={'C'}
              text={this.state.data.opt3}
              onPress={() => this.onSelect('3')}
            />
            <Option
              style={this.state.style.opt4}
              optionText={'D'}
              text={this.state.data.opt4}
              onPress={() => this.onSelect('4')}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <SmallButton title="Previous" onPress={this.previos} />
          <SmallButton title="Next" isLeft={true} onPress={this.next} />
        </View>
      </View>
    );
  }

  next = () => {
    this.resetTempState();
    this.props.loadQuestion(
      this.nav.state.params.isBookmark,
      this.question_no++,
      this.state.data.category_id,
    );
  };

  previos = () => {
    if (this.question_no > 1) {
      this.resetTempState();
      this.props.loadQuestion(
        this.nav.state.params.isBookmark,
        this.question_no--,
        this.state.data.category_id,
      );
    }
  };

  resetTempState() {
    this.setState({
      style: {
        opt1: null,
        opt2: null,
        opt3: null,
        opt4: null,
      },
    });
  }
}
const mapStateToProps = state => ({
  data: state.data.question,
  info: state.user.info,
  isLoading: state.ui.IsLoading,
});
const mapDispatchToProps = {
  loadQuestion: data.loadQuestion,
  favorite: data.favorite,
};

const QuestionWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question);

export default QuestionWrapper;
