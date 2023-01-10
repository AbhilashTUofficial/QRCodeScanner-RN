import axios from 'axios';
export const ConnectorCall = async (url) => {
  try {
    var response = await axios.get(url);
    if(typeof(response)==="string"){
      response= JSON.parse(response.data)
    }else{
      response= response.data;
    }
    return validateResponse(response);

  } catch (error) {
    return "network_error"
  }
};

const validateResponse=(response)=>{
  try {
    if(response.name!==undefined && response.uid!==undefined 
      && response.email!==undefined && response.timezone!==undefined
      && response.number!==undefined){
        return response
      }else{
    return "not_valid"

      }  
  } catch (error) {
    return "not_valid"
  }
}