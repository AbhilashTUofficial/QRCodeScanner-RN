import AsyncStorage from "@react-native-async-storage/async-storage";

export const putToLocal = async(data) => {
    
    try {
        AsyncStorage.removeItem("@user_data")
        AsyncStorage.setItem("@user_data", JSON.stringify(data))
        
    } catch (error) {
        console.log("Error Occured! \n"+error)
    }
};

export const getFromLocal = async() => {
    try {
        const jsonValue = await AsyncStorage.getItem('@user_data')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    } catch (error) {
        console.log("Error Occured \n"+error)
        return {}
    }
};

export const clearLocal =async()=>{
    try {
        AsyncStorage.removeItem("@user_data")
    } catch (error) {
        console.log("Error Occured! \n"+error)
        
    }
}