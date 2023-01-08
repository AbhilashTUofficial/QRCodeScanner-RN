import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';
import { ConnectorCall } from '../../Utils/http';
import { useNavigation } from '@react-navigation/native';
import putToLocal from '../../Utils/putToLocal';
import getFromLocal from '../../Utils/getFromLocal';

const QRScanner = () => {
  const navigation=useNavigation();
  // const localData=getFromLocal();
  const localData={}

    onSuccess =async e => {
        const response= await ConnectorCall(url=e.data);
        putToLocal(response);
        navigation.navigate("home")
      };
      
      return (

        <View style={qrStyles.cont}>
            <QRCodeScanner
             style={qrStyles.scanner}
            onRead={this.onSuccess}
            cameraProps={{captureAudio:false}}
            flashMode={RNCamera.Constants.FlashMode.off}
            containerStyle={{width:300,height:300}}
            cameraStyle={[{height:300,width:300}]}
          />
        </View>
        )
}

export default QRScanner

const qrStyles=StyleSheet.create({
    cont:{
        width:300,
        height:300,
        elevation:2,
        borderRadius:12,
        backgroundColor:"white",
        // overflow:"hidden"
    },
    scanner:{
     width:"100%",
     height:"100%"
    }
})