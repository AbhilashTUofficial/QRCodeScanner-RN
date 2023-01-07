import { Text, StyleSheet, Pressable, Platform, Image } from 'react-native'
import React from 'react'

const CustomBtn = ({onPress,icon}) => {
  
  return (
    <Pressable 
    style={customBtnStyles.cont}
    onPress={onPress}>
     <Image style={customBtnStyles.icon} source={icon}/>
    </Pressable>
  )
}

export default CustomBtn

const customBtnStyles=StyleSheet.create({
    cont:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#06d79c",
        marginHorizontal:8,
        marginVertical:24,
        padding:12,
        borderRadius:6,
        // android shadow
        elevation:6,
        // ios shadow
        shadowColor: Platform.OS==="ios"&&"#92E5CA",
        shadowOffset: {width: 2, height: 6},
        shadowOpacity: 1,
        shadowRadius: 26,
    },
    icon:{
      width:32,
      height:32,        
    }
})