import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

export const Guides = createDrawerNavigator({
  GetStarted: {
    screen: () => <Text>Guides</Text>,
    navigationOptions: () => ({
      title: '01-Components and APIs'
    })
  }
});
