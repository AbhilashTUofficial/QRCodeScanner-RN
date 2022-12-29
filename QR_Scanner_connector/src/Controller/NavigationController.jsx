import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import QRScannerScreen from '../Screens/QRScannerScreen/QRScannerScreen';

const NavigationController = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='qrscannerscreen' component={QRScannerScreen} />
        <Stack.Screen name='home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationController