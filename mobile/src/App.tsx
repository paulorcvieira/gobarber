import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

import { Colors } from './styles/Colors';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={Colors.gray600} />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: Colors.gray600 }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
