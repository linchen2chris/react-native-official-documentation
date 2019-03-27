import { SIZE } from './constants';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import { github } from 'react-syntax-highlighter/styles/hljs';
import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import styled from 'styled-components';

export const H1 = styled(Text)`
  color: #005087;
  font-size: ${SIZE.huge};
  margin-bottom: 20px;
`;

export const H2 = styled(Text)`
  color: #005087;
  font-size: ${SIZE.large};
  margin-bottom: 15px;
`;
export const P = styled(Text)`
  color: #000;
  font-size: ${SIZE.normal};
  margin-bottom: 10px;
`;
export const Bold = styled(Text)`
  font-weight: bold;
`;

export const Code = ({ lan, children }: { lan: string; children: string }) => (
  <View style={{ marginBottom: 10 }}>
    <SyntaxHighlighter language={lan} style={github} highlighter={'hljs'}>
      {children}
    </SyntaxHighlighter>
  </View>
);

export const Quote = styled(Text)`
  color: #6a737d;
  background-color: rgba(255, 229, 100, 0.3);
  font-size: ${SIZE.normal};
  padding: 10px;
  padding-right: 20px;
  margin-bottom: 10px;
`;
