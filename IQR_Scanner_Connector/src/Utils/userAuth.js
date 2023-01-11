import AsyncStorage from "@react-native-async-storage/async-storage";

export const userAuthCheck = async() => {
    try {
        const jsonValue = await AsyncStorage.getItem('@user_status')
        return jsonValue ;
        
    } catch (error) {
        console.log("Error Occured \n"+error)
        return "error"
    }
    
};

export const userAuthSet = async(status) => {
    
    try {
        AsyncStorage.removeItem("@user_status")
        AsyncStorage.setItem("@user_status",status)
        
    } catch (error) {
        console.log("Error Occured! \n"+error)
    }
};