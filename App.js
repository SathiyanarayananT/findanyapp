import React from 'react';
import {Provider} from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import store from './src/store/configureStore';
import NavigationStack from './src/navigation/NavigationStack';
import {StatusBar} from 'react-native';

AntIcon.loadFont();

export default function App() {
  StatusBar.setBarStyle('default', true);
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
}
