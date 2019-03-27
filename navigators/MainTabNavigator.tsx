import { APIs } from '../screens/APIs';
import { Basics } from '../screens/Basics';
import { Components } from '../screens/Components';
import { Guides } from '../screens/Guides';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator({
  Basics: {
    screen: Basics,
    navigationOptions: () => ({
      tabBarLabel: 'Basic'
    })
  },
  Guides: {
    screen: Guides,
    navigationOptions: {
      tabBarLabel: 'Guides'
    }
  },
  Components: {
    screen: Components,
    navigationOptions: {
      tarBarLabel: 'Components'
    }
  },
  APIs: {
    screen: APIs,
    navigationOptions: {
      tarBarLabel: 'APIs'
    }
  }
});
