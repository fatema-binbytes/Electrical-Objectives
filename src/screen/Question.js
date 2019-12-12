import React, {Component} from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {connect} from 'react-redux';

import {questionData, user} from '../store/action';
import SmallButton from '../component/smallButton';
import Favorite from '../component/favorite';
import Option from '../component/option';
import Login from '../component/login';
import PopupDialog from '../component/PopupDialog';
import styles from './styles/question-style';
import colors from '../config/colors';

class Question extends Component {
  constructor(props) {
    super(props);
    this.nav = this.props.navigation;
    this.question_no = this.nav.state.params.question_no;
    this.initialQuestionNo = this.nav.state.params.question_no;
    this.category_id = this.nav.state.params.category_id;
    this.state = {
      show: false,
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
      this.props.navigation,
    );
  }
  onSelect = value => {
    this.refs.rgView.setNativeProps({
      pointerEvents: 'none',
    });

    const style = this.state.style;

    if (String(value) === String(this.props.data.correct_opt)) {
      style[`opt${value}`] = styles.correct;
    } else {
      style[`opt${value}`] = styles.wrong;
      style[`opt${this.props.data.correct_opt}`] = styles.correct;
    }
    this.setState(style);
  };

  render() {
    return (
      <View style={styles.container}>
        <PopupDialog
          visible={this.state.show}
          onTouchOutside={() => {
            this.setState({show: false});
          }}>
          <Login
            onLogin={body => {
              this.props.login(body);
              this.setState({show: false});
            }}
          />
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
                name={this.props.data.favorite ? 'star' : 'star-o'}
                onPress={() =>
                  this.props.info
                    ? this.props.favorite(this.props.data.id)
                    : this.setState({show: true})
                }
              />
            </View>
            <HTMLView value={this.props.data.question} />
          </View>
          <View ref={'rgView'}>
            <Text style={styles.optionLabelText}>OPTIONS</Text>
            <Option
              style={this.state.style.opt1}
              optionText={'A'}
              text={this.props.data.opt1}
              onPress={() => this.onSelect('1')}
            />
            <Option
              style={this.state.style.opt2}
              optionText={'B'}
              text={this.props.data.opt2}
              onPress={() => this.onSelect('2')}
            />
            <Option
              style={this.state.style.opt3}
              optionText={'C'}
              text={this.props.data.opt3}
              onPress={() => this.onSelect('3')}
            />
            <Option
              style={this.state.style.opt4}
              optionText={'D'}
              text={this.props.data.opt4}
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
    this.question_no++;
    this.props.loadQuestion(
      this.nav.state.params.isBookmark,
      this.question_no,
      this.props.data.category_id,
      this.props.navigation,
    );
  };

  previos = () => {
    if (this.question_no > 1) {
      this.resetTempState();
      this.question_no--;
      this.props.loadQuestion(
        this.nav.state.params.isBookmark,
        this.question_no,
        this.props.data.category_id,
        this.props.navigation,
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
  data: state.questionData.question,
  info: state.user.info,
  isLoading: state.ui.IsLoading,
});
const mapDispatchToProps = {
  loadQuestion: questionData.loadQuestion,
  favorite: questionData.favorite,
  login: user.userLogin,
};

const QuestionWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question);

export default QuestionWrapper;
