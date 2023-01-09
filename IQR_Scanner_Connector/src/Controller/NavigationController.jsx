import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import QRScannerScreen from '../Screens/QRScannerScreen/QRScannerScreen';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import { Pressable, Text } from 'react-native';
import userAuthSet from '../Utils/userAuthSet';
import { changeUserStatus } from '../Redux/User/userCredSlice';

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
        
        <Stack.Screen 
        name='home' 
        component={HomeScreen}
        options={({navigation})=>({
          title:"HOME",
          headerRight: () => (
            <Pressable
              onPress={() => {
                userAuthSet("notloggedin")
                changeUserStatus("notloggedin")
                navigation.replace("qrscannerscreen")
              }}>
                <Text
                style={{
                  color:"#007aff",
                  fontSize:14,
                  fontWeight:"bold"
                }}>CLEAR</Text>
            </Pressable>
          )})} />
        
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default NavigationController