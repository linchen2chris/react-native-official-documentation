import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigators/AppNavigator';
import React from 'react';

const App = () => (
  <View style={styles.container}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default App;
