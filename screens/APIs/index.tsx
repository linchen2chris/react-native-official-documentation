import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

export const APIs = createDrawerNavigator({
  AccessibilityInfo: {
    screen: () => <Text>APIs</Text>,
    navigationOptions: () => ({
      title: '01-Accessibility Info'
    })
  }
});
