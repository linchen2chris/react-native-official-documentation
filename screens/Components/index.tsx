import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

export const Components = createDrawerNavigator({
  GetStarted: {
    screen: () => <Text>Components</Text>,
    navigationOptions: () => ({
      title: '01-Activity Indicator'
    })
  }
});
