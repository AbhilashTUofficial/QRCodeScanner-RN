import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';

const size=Dimensions.get('window').width*0.8;

const CameraScanner = ({onSuccess}) => {
    console.log("called")
  return (
    <View style={cameraScannerStyles.cont}>
        <View style={cameraScannerStyles.cameraCont}/>
    {/* <QRCodeScanner
    style={cameraScannerStyles.cameraCont}
    onRead={onSuccess}
    flashMode={RNCamera.Constants.FlashMode.off}
    containerStyle={{width:300,height:300}}
    cameraStyle={[{height:300,width:300}]}
    /> */}
 </View>
  )
}

export default CameraScanner;


const cameraScannerStyles=StyleSheet.create({
    cont:{
        width:size,
        height:size,
        backgroundColor:"white",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
    },
    cameraCont:{
        width:200,
        height:200,
    
    },

})