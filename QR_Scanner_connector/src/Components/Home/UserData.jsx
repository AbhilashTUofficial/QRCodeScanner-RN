import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextTile from './TextTile'
import getFromLocal from '../../Utils/getFromLocal'

const UserData = () => {

    data=getFromLocal()
  return (
    <View style={userDataSyles.cont}>
        <TextTile a={"Name"} b={"name"}/>
        <TextTile a={"Email"} b={"email"}/>
        <TextTile a={"Name"} b={"phone"}/>
        <TextTile a={"TimeZone"} b={"timezone"}/>

    </View>
  )
}

export default UserData


const userDataSyles=StyleSheet.create({
    cont:{
        width:300,
        height:300,
        elevation:2,
        borderRadius:12,
        backgroundColor:"white",
        overflow:"hidden"
    },

})