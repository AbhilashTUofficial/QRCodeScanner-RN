import {Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ScanBtn = ({onPress,prompt}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
     style={scanBtnStyles.cont}>
      <Text style={scanBtnStyles.txt}>{prompt}</Text>
    </TouchableOpacity>
  )
}

export default ScanBtn

const scanBtnStyles=StyleSheet.create({
    cont:{
        width:80,
        height:80,
        backgroundColor:"#06d79c",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:99,
        marginVertical:16,
        shadowColor: "rgb(146,229,202)",
        shadowOffset: {width: 2, height: 6},
        shadowOpacity: 1,
        shadowRadius: 26,
    },
    txt:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1
    }
})