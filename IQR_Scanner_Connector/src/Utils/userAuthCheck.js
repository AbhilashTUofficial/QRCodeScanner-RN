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

