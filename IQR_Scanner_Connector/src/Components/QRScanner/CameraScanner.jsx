import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';

const size=Dimensions.get('window').width*0.8;

const CameraScanner = ({onSuccess}) => {
  return (
    
    <View style={cameraScannerStyles.cont}>
      <QRCodeScanner
      style={cameraScannerStyles.cameraCont}
      onRead={onSuccess}
      cameraProps={{captureAudio:false}}
      flashMode={RNCamera.Constants.FlashMode.off}
      containerStyle={{width:size,height:size}}
      cameraStyle={[{height:size,width:size}]}
      /> 
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
        overflow:"hidden"
    },
})