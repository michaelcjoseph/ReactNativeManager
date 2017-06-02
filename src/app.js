import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCkxpHaIEoaaXm8DvxBCZuBDOA3Li9joT8',
      authDomain: 'reactnativemanager-ab450.firebaseapp.com',
      databaseURL: 'https://reactnativemanager-ab450.firebaseio.com',
      projectId: 'reactnativemanager-ab450',
      storageBucket: 'reactnativemanager-ab450.appspot.com',
      messagingSenderId: '605407966920',
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
