import AsyncStorage from "@react-native-async-storage/async-storage";

export default GetFromLocal = async () => {


    try {
        
        return await AsyncStorage.getItem('user_data').then((res)=>{return JSON.parse(res)}) ;

    } catch (error) {
        return [];
    }
};