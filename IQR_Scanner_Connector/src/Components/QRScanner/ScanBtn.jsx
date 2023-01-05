import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ScanBtn = ({onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
     style={scanBtnStyles.cont}>
      <Text style={scanBtnStyles.txt}>SCAN</Text>
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
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
    },
    txt:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1
    }
})