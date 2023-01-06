import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import OpenGalleryBtn from '../../Components/QRScanner/OpenGalleryBtn'
import { launchImageLibrary } from 'react-native-image-picker';
import ImageScanner from '../../Components/QRScanner/ImageScanner';
import ScanBtn from '../../Components/QRScanner/ScanBtn';
import RNQRGenerator from 'rn-qr-generator';
import { ConnectorCall } from '../../Utils/http';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { changeUserStatus, saveUser } from '../../Redux/User/userCredSlice';


const QRScannerScreen = () => {

  const navigation=useNavigation()
  const dispatch=useDispatch();
  const [selectImage, imageSelected] =useState(false);
  const [imgUri,setImgUri]=useState([])
  const [canRead,setCanRead]=useState(true)

  // Upload Image from gallery.
  const uploadImageHanlder = () => {

    const options = {
        noData: true,
    };

    // Open Gallery and add image to image-stack
    launchImageLibrary(options, response => {
        if (!response.didCancel) {
            setImgUri(uri => [...uri, response.assets[0].uri]);
          imageSelected(true)
        }
    });
};

// Scan selected image.
const scanQrCode=()=>{
  if(canRead){
    RNQRGenerator.detect({
      uri: imgUri[0], 
    })
      .then(response => {
        const { values } = response; 
        if(values!==[]){
          callLink(values[0]);
        }
    })
  }else{
    uploadImageHanlder();
    // Reset states
    setCanRead(true)
    setImgUri([]);
  }
}
// Call the link from QR Code.
const callLink=async(url)=>{
  try {
    await ConnectorCall(url).then((response)=>{
      values=[]
      dispatch(saveUser(response))
      dispatch(changeUserStatus("loggedin"))
      navigation.navigate("home")
      imageSelected(false)
    setImgUri([]);

    }) 
  } catch (error) {
    alert('This Image Cant be Scanned,\nUpload another one');
    setCanRead(false)
  }
}
  return (
    <View style={qrStyles.cont}>
      {
      !selectImage?<OpenGalleryBtn 
      onPress={uploadImageHanlder
    }/> :
      <>
      <ImageScanner imgUri={imgUri} imgStyle={!canRead&&{opacity:0.5}}/>
      <ScanBtn onPress={()=>scanQrCode()} 
      prompt={canRead?"SCAN":"UPLOAD"}/>
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
    },
})