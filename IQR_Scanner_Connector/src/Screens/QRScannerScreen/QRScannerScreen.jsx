import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import OpenGalleryBtn from '../../Components/QRScanner/OpenGalleryBtn'
import { launchImageLibrary } from 'react-native-image-picker';
import ImageScanner from '../../Components/QRScanner/ImageScanner';
import ScanBtn from '../../Components/QRScanner/ScanBtn';
import RNQRGenerator from 'rn-qr-generator';
import { ConnectorCall } from '../../Utils/http';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../Redux/User/userCredSlice';


const QRScannerScreen = () => {

  const navigation=useNavigation()
  const dispatch=useDispatch();

  const [selectImage, imageSelected] =useState(false);
  const [imgUri,setImgUri]=useState([])

const insertImageHandler = () => {
  const options = {
      noData: true,
  };

  launchImageLibrary(options, response => {
      if (!response.didCancel) {
          setImgUri(uri => [...uri, response.assets[0].uri]);
        imageSelected(true)

      }
  });
};

const scanQrCode=()=>{
  RNQRGenerator.detect({
    uri: imgUri[0], 
  })
    .then(response => {
      const { values } = response; 
      if(values!==[]){
        connectorCall(values[0]);
      }
  })
    .catch(error => console.log('Cannot detect QR code in image', error));
}

const connectorCall=async(url)=>{
  const response=await ConnectorCall(url).then((response)=>{
    dispatch(saveUser(response))
    navigation.navigate("home")
  }) 
}
  return (
    <View style={qrStyles.cont}>
      {
      !selectImage?<OpenGalleryBtn 
      onPress={insertImageHandler}/> :
      <>
      <ImageScanner imgUri={imgUri}/>
      <ScanBtn onPress={()=>scanQrCode()}/>
      </>
      }
    </View>
  )
}

export default QRScannerScreen

const qrStyles=StyleSheet.create({
    cont:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})