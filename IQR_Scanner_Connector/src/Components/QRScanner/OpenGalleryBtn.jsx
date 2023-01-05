import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const OpenGalleryBtn = ({onPress}) => {

  return (
    <Pressable 
    style={openGalleryBtnStyles.cont}
    onPress={onPress}>
      <Text style={openGalleryBtnStyles.txt}
      >OPEN GALLERY</Text>
    </Pressable>
  )
}

export default OpenGalleryBtn

const openGalleryBtnStyles=StyleSheet.create({
    cont:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#06d79c",
        padding:16,
        borderRadius:8,
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    txt:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1,
    }
})