import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const QRScannerScreen = () => {
  return (
    <View style={qrStyles.cont}>
    </View>
  )
}

export default QRScannerScreen

const qrStyles=StyleSheet.create({
    cont:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
})