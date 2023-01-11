import axios from 'axios';
export const ConnectorCall = async (url) => {
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
