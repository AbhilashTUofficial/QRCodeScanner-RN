import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import getFromLocal from '../../Utils/getFromLocal'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Redux/User/userCredSlice'

const LoadingScreen = () => {
  const navigation=useNavigation();
  const dispatch=useDispatch();

  const data=useSelector((state)=>state.user)
  useEffect(()=>{

    // console.log(getFromLocal())
    console.log(data)

    if(data===null || data==="null"){
      return (
        <View style={loadingScreenStyles.cont}>
          <Text>Loading...</Text>
        </View>
      )
    }else if(data===[]){
      return(navigation.navigate("qrscannerscreen")) 
    }
    else if(data!==[]){
      return(navigation.navigate("home")) 
    } 
  })

}
export default LoadingScreen

const loadingScreenStyles=StyleSheet.create({
    cont:{
        height:"100%",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
      }
})