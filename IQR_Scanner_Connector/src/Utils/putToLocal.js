import AsyncStorage from "@react-native-async-storage/async-storage";

export default putToLocal = async(data) => {
    
    try {
        AsyncStorage.removeItem("@user_data")
        AsyncStorage.setItem("@user_data", JSON.stringify(data))
        
    } catch (error) {
        console.log("Error Occured! \n"+error)
    }
};
