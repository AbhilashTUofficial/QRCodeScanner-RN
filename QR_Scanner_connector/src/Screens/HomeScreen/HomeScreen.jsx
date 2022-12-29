import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={homeStyle.cont}>
      <Text>Home</Text>
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