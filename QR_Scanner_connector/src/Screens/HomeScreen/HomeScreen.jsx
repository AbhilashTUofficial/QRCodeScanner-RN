import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserData from '../../Components/Home/UserData';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  // const route=useRoute();
  // const data=route.params
  return (
    <View style={homeStyle.cont}>
      {/* <UserData data={data}/> */}
    </View>
  )
}

export default HomeScreen;

const homeStyle=StyleSheet.create({
  cont:{
    height:"100%",
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  }
})