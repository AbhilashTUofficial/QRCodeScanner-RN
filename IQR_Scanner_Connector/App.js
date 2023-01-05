import React, { Component } from 'react';
import NavigationController from './src/Controller/NavigationController';
import { View, Text } from 'react-native';

export class App extends Component {
  render() {
    return (
      <NavigationController/>
    )
  }
}

export default App