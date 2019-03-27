import { createDrawerNavigator } from 'react-navigation';
import GetStarted from './01-GetStarted';

export const Basics = createDrawerNavigator({
  GetStarted: {
    screen: GetStarted,
    navigationOptions: () => ({
      title: '01-Get Started'
    })
  }
});
