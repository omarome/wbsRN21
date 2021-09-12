import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainProvider} from './contexts/MainContext';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainProvider>
        <Navigator />
      </MainProvider>
    </SafeAreaProvider>
  );
};

export default App;
