import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import TextTile from './TextTile'
import getFromLocal from '../../Utils/getFromLocal'

const UserData = ({data}) => {

  // var data={}
  // useEffect(()=>{
  //   data=loadData();
  //   console.log(data)
  // })


  // loadData=async()=>{
  //   return await getFromLocal().then(res=>{return res}) 
    
  // }
  console.log(data)
    return (
      <View style={userDataSyles.cont}>
        <Text>{}</Text>
          <TextTile a={"Name"} b={data["name"]}/>
          <TextTile a={"UID"} b={data["uid"]}/>
          <TextTile a={"Email"} b={data["email"]}/>
          <TextTile a={"Name"} b={"123"}/>
          <TextTile a={"TimeZone"} b={data["timezone"]}/>
  
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