import RNQRGenerator from "rn-qr-generator";
import { callLink } from "./network";

  // Scan selected image.
 export const scanQrCode=(canRead,imgUri,dispatch,navigation,setCanRead,setImgUri)=>{
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
              callLink(
                values[0],
                dispatch,
                navigation,
                ((e)=>{setCanRead(e)}).bind(),
                ((e)=>{setImgUri(e)}).bind()
                );
            }
        })
      }
    }else{
      // Reset states
      setCanRead(true)
      setImgUri([]);
    }
  }
