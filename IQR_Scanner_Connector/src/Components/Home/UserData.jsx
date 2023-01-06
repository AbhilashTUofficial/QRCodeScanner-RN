import { View, StyleSheet } from 'react-native'
import React from 'react'
import TextTile from './TextTile'

const UserData = ({data}) => {
  
    return (
      <View style={userDataSyles.cont}>
          <TextTile a={"UID"} b={data["uid"]}/>
          <TextTile a={"Name"} b={data["name"]}/>
          <TextTile a={"Email"} b={data["email"]}/>
          <TextTile a={"Phone"} b={data["number"]}/>
          <TextTile a={"TimeZone"} b={data["timezone"]}/>
      </View>
    )
  }

export default UserData


const userDataSyles=StyleSheet.create({
    cont:{
        width:300,
        height:300,
        backgroundColor:"white",
        borderRadius:12,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent:"center",
        alignItems:"center"
    },
})