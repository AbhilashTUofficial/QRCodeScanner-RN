import { launchImageLibrary } from "react-native-image-picker";

 export const openGallery=(setImgUri,setCanRead,setCameraOn)=>{
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