import {
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

import GetStarted from '../screens/Basics/01-GetStarted';

const Basics = createDrawerNavigator({
  GetStarted: {
    screen: GetStarted,
    navigationOptions: () => ({
      title: '01-Get Started'
    })
  }
});

export default createBottomTabNavigator({
  Basics: {
    screen: Basics,
    navigationOptions: () => ({
      tabBarLabel: 'Basic'
    })
  }
});
