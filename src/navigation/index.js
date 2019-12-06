import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {YellowBox, View} from 'react-native';
import colors from '../config/colors';

import Splash from '../screen/Splash';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Start from '../screen/Start';
import Question from '../screen/Question';
import About from '../screen/About';

const stackNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: 'Categories',
      headerStyle: {
        backgroundColor: colors.default_primary_color,
      },
      headerTitleStyle: {
        color: colors.text_primary_color,
      },
      headerTintColor: colors.text_primary_color,
    },
  },
  Start: {
    screen: Start,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.default_primary_color,
      },
      headerTitleStyle: {
        color: colors.text_primary_color,
      },
      headerTintColor: colors.text_primary_color,
    },
  },
  Question: {
    screen: Question,
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About App',
      headerStyle: {
        backgroundColor: colors.default_primary_color,
      },
      headerTitleStyle: {
        color: colors.text_primary_color,
      },
      headerTintColor: colors.text_primary_color,
    },
  },
});
export default createAppContainer(stackNavigator);
