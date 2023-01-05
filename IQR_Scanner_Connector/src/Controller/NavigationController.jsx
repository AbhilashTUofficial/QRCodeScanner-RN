import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import QRScannerScreen from '../Screens/QRScannerScreen/QRScannerScreen';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

const NavigationController = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>    
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
        name='loadingscreen' 
        component={LoadingScreen}
        options={{
          title:"Loading...."
        }} />
        <Stack.Screen 
        name='qrscannerscreen' 
        component={QRScannerScreen}
        options={{
          title:"QR Code Scanner"
        }} />
        <Stack.Screen name='home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default NavigationController