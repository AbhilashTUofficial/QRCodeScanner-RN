import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';
import { ConnectorCall } from '../../Utils/http';
import { useNavigation } from '@react-navigation/native';
import putToLocal from '../../Utils/putToLocal';

const QRScanner = () => {
  const navigation=useNavigation();

    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
        const response=ConnectorCall(url=e.data);
        putToLocal(response);
        navigation.navigate("home")

      };

  return (
    <View style={qrStyles.cont}>
         <QRCodeScanner
         style={qrStyles.scanner}
        onRead={this.onSuccess}
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
        overflow:"hidden"
    },
    scanner:{
     
    }
})