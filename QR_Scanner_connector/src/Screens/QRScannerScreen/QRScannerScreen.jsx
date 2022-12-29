import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRScanner from '../../Components/QRScanner/QRScanner'

const QRScannerScreen = () => {
  return (
    <View style={qrStyles.cont}>
        <QRScanner/>
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