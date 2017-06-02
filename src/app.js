import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Text>Manager App</Text>
    </View>
  </Provider>
);

export default App;
