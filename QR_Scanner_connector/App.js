import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import NavigationController from './src/Controller/NavigationController'
// https://github.com/moaazsidat/react-native-qrcode-scanner/issues/384#issuecomment-1285600911
export class App extends Component {
  render() {
    return (
      <NavigationController/>
    )
  }
}

export default App