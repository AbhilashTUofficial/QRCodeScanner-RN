

export const isValidUrl = urlString=> {
  var res = urlString.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(res == null)
      return false;
  else
      return true;
}

export const isValidResponse=(response)=>{
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