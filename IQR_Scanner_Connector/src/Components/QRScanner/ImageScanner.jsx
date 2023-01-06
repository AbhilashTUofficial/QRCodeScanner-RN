import { View, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const size=Dimensions.get('window').width*0.8;

const ImageScanner = ({imgUri,imgStyle}) => {
  return (
    <View style={imageScannerStyles.cont}>
        <Image 
        style={[imageScannerStyles.imgCont,imgStyle]}
         source={{uri:imgUri[0]}}/>
    </View>
  )
}

export default ImageScanner

const imageScannerStyles=StyleSheet.create({
    cont:{
        width:size,
        height:size,
        backgroundColor:"white",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden",

    },
    imgCont:{
        width:"100%",
        height:"100%",
    },

})