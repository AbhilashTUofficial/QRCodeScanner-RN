import { View, StyleSheet, Platform } from 'react-native'
import React, {useState } from 'react'
import CustomBtn from '../../Components/QRScanner/CustomBtn'
import { callLink } from '../../Utils/network';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ImageScanner from '../../Components/QRScanner/ImageScanner';
import CameraScanner from '../../Components/QRScanner/CameraScanner';
import { openGallery } from '../../Utils/openGallery';
import { scanQrCode } from '../../Utils/scanQRCode';

const QRScannerScreen = () => {
  // icons
  const galleryIcon=require("../../Assets/Img/Icons/gallery_icon.png");
  const cameraIcon=require("../../Assets/Img/Icons/camera_icon.png");
  const scanIcon=require("../../Assets/Img/Icons/scan_icon.png");
  const notFoundIcon=require("../../Assets/Img/Icons/notfound_icon.png")

  // hooks and states
  const navigation=useNavigation()
  const dispatch=useDispatch();
  const [imgUri,setImgUri]=useState([])
  const [canRead,setCanRead]=useState(true)
  const [cameraOn,setCameraOn]=useState(false)


  const openCamera=()=>{
    setCameraOn(true)
    setCanRead(true)

    if(Platform.OS==="ios"){
      alert("Not Tested on a real device")
    }
    setImgUri([])
  }

  const renderScanner=()=>{
    if(cameraOn){
    return <CameraScanner onSuccess={((e)=>{
      callLink(
        e.data,
        dispatch,
        navigation,
        ((e)=>setCanRead(e)).bind(),
        ((e)=>setImgUri(e)).bind()
        )}).bind()}/>
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
      <CustomBtn onPress={()=>scanQrCode(
        canRead,imgUri,dispatch,navigation,
        ((e)=>setCanRead(e)).bind(),
        ((e)=>setImgUri(e)).bind()
      )}
      icon={canRead?scanIcon:notFoundIcon}/>
      <CustomBtn onPress={
        ()=>openGallery(
        ((e)=>{setImgUri(e)}).bind(),
        ((e)=>{setCanRead(e)}).bind(),
        ((e)=>{setCameraOn(e)}).bind()
        )}
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