import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {YellowBox} from 'react-native';
import colors from '../config/colors';

import Splash from '../screen/Splash';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Question from '../screen/Question';
import About from '../screen/About';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
YellowBox.ignoreWarnings(['Require cycle:']);
const stackNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
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
  Question: {
    screen: Question,
    navigationOptions: ({navigation}) => {
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
    },
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
