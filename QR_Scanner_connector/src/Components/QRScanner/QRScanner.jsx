import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';

const QRScanner = () => {

    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };

  return (
    <View style={qrStyles.cont}>
         <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text >
            Go to{' '}
            <Text >wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity >
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
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
        backgroundColor:"white"
        
    }
})