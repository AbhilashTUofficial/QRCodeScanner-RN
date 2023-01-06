import { Text, StyleSheet, Pressable } from 'react-native'
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
        borderRadius:22,
        shadowColor: "rgb(146,229,202)",
        shadowOffset: {width: 2, height: 6},
        shadowOpacity: 1,
        shadowRadius: 26,
    },
    txt:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1,
    }
})