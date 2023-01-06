import AsyncStorage from "@react-native-async-storage/async-storage";

export default getFromLocal = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@user_data')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    } catch (error) {
        console.log("Error Occured \n"+error)
        return {}
    }
};