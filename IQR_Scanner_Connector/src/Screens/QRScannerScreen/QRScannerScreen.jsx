import { View, StyleSheet, Platform } from 'react-native'
import React, {useState } from 'react'
import CustomBtn from '../../Components/QRScanner/CustomBtn'
import RNQRGenerator from 'rn-qr-generator';
import { launchImageLibrary } from 'react-native-image-picker';
import { ConnectorCall } from '../../Utils/http';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { changeUserStatus, saveUser } from '../../Redux/User/userCredSlice';
import ImageScanner from '../../Components/QRScanner/ImageScanner';
import CameraScanner from '../../Components/QRScanner/CameraScanner';
import isValidUrl from '../../Utils/isValidUrl';

const QRScannerScreen = () => {

  // hooks and states
  const navigation=useNavigation()
  const dispatch=useDispatch();
  const [imgUri,setImgUri]=useState([])
  const [canRead,setCanRead]=useState(true)
  const [cameraOn,setCameraOn]=useState(false)

  // icons
  const galleryIcon=require("../../Assets/Img/Icons/gallery_icon.png");
  const cameraIcon=require("../../Assets/Img/Icons/camera_icon.png");
  const scanIcon=require("../../Assets/Img/Icons/scan_icon.png");
  const notFoundIcon=require("../../Assets/Img/Icons/notfound_icon.png")

  const openCamera=()=>{
    setCameraOn(true)
    setCanRead(true)

    if(Platform.OS==="ios"){
      alert("Not Tested on a real device")
    }
    setImgUri([])
  }

  const openGallery=()=>{
    setImgUri([])
    setCanRead(true)
    setCameraOn(false)
    const options = {
      noData: true,
  };

  // Open Gallery and add image to image-stack
  launchImageLibrary(options, response => {
      if (!response.didCancel) {
          setImgUri(uri => [...uri, response.assets[0].uri]);
      }
  });
  }

  // Scan selected image.
  const scanQrCode=()=>{
    if(canRead){
      if(imgUri.length===0){
        alert("Select A Image or Open your Camera first")
      }else{
        RNQRGenerator.detect({
          uri: imgUri[0], 
        })
          .then(response => {
            const { values } = response; 
            if(values!==[]){
              callLink(values[0]);
            }
        })
      }
    }else{
      // Reset states
      setCanRead(true)
      setImgUri([]);
    }
  }
  // Call the link from QR Code.
  const callLink=async(url)=>{

    if(isValidUrl(url)){
      try {
        await ConnectorCall(url).then((response)=>{
          values=[]
          if(response==="network_error"){
            alert('Check your network!');
          }else if(response==="not_valid"){
            alert("Invalid QR Code")
          }else{
            dispatch(saveUser(response))
            dispatch(changeUserStatus("loggedin"))
            navigation.navigate("home")
            setImgUri([]);
          }}) 
      } catch (error) {      
        alert('This Image Cant be Scanned,\nUpload another one');
        setCanRead(false)
      }
    }else{
      alert("This Image can't be scanned.\nPlease check your Image.")
      setCanRead(false)
    }
  }


  const renderScanner=()=>{
    if(cameraOn){
    return <CameraScanner onSuccess={((e)=>{callLink(e.data)}).bind()}/>
    }else{
    return <ImageScanner imgUri={imgUri} imgStyle={!canRead&&{opacity:0.5}}/>
    }
  }

  return (
    <View style={qrStyles.cont}>
      {
        renderScanner()
      }
      <View style={qrStyles.btns}>
      <CustomBtn onPress={openCamera}
      icon={cameraIcon}/>
      <CustomBtn onPress={scanQrCode}
      icon={canRead?scanIcon:notFoundIcon}/>
      <CustomBtn onPress={openGallery}
      icon={galleryIcon}/>
      </View>
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
    btns:{
      flexDirection:"row",
    }
})