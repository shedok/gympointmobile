import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import './config/ReactotronConfig';

import App from './App';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

export default function Index() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="22202C" />
      <App />
    </>
  );
}
