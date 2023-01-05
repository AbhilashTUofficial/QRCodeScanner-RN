import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserData from '../../Components/Home/UserData';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const data=useSelector((state)=>state.user)
  return (
    <View style={homeStyle.cont}>
      <UserData data={data}/>
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