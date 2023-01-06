import AsyncStorage from "@react-native-async-storage/async-storage";

export default userAuthSet = async(status) => {
    
    try {
        AsyncStorage.removeItem("@user_status")
        AsyncStorage.setItem("@user_status",status)
        
    } catch (error) {
        console.log("Error Occured! \n"+error)
    }
};