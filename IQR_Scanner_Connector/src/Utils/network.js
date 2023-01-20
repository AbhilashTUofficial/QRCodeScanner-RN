import axios from 'axios';
import { changeUserStatus, saveUser } from '../Redux/User/userCredSlice';
import { isValidUrl } from './validation';


export const urlCall = async (url) => {
  try {
    var response = await axios.get(url);
    if(typeof(response)==="string"){
      response= JSON.parse(response.data)
    }else{
      response= response.data;
    }
    return response;

  } catch (error) {
    return "network_error"
  }
};

  // Call the link from QR Code.
export const callLink=async(url,dispatch,navigation,setCanRead,setImgUri)=>{

    if(isValidUrl(url)){
      try {
        await urlCall(url).then((response)=>{
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
