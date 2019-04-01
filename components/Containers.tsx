import { SafeAreaView, ScrollView } from 'react-navigation';
import React from 'react';

export const PageContainer = ({ children }) => (
  <SafeAreaView>
    <ScrollView style={{ padding: 20 }}>{children}</ScrollView>
  </SafeAreaView>
);
