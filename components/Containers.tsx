import { SafeAreaView, ScrollView } from 'react-navigation';
import React from 'react';

export const PageContainer = ({ children }) => (
  <SafeAreaView>
    <ScrollView style={{ padding: 20, marginBottom: 30 }}>
      {children}
    </ScrollView>
  </SafeAreaView>
);
