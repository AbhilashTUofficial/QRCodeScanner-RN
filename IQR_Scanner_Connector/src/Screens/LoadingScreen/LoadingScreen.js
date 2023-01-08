import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import getFromLocal from '../../Utils/getFromLocal'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { changeUserStatus, getUser } from '../../Redux/User/userCredSlice'
import { userAuthCheck } from '../../Utils/userAuthCheck'

const LoadingScreen = () => {
  const navigation=useNavigation();
  const dispatch=useDispatch();
  const [userStatus, setUserStatus]=useState()
  
  console.log(userStatus)
  // Load User Data from local storage.
  loadData=async()=>{
    const localUserData=await getFromLocal()
    dispatch(getUser(localUserData))
  }

  // Load User Status from local storage.
  loadUser=async()=>{
    setUserStatus(await userAuthCheck())
    if(userStatus!=null){
      dispatch(changeUserStatus(userStatus))
    }
  }

  // Check User Status.
  checkUser=()=>{
    if(userStatus==="notloggedin" || userStatus===null){
      return(navigation.replace("qrscannerscreen")) 
    }
    else if(userStatus==="loggedin"){
      loadData()
      return(navigation.replace("home")) 
    } 
  }

  useEffect(()=>{

  loadUser();

  checkUser();

  },[userStatus])

  // Loading state
  return (
    <View style={loadingScreenStyles.cont}>
      <Text>Loading...</Text>
    </View>
  )
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