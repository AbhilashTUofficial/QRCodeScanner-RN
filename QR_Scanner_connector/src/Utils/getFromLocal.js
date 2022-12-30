import AsyncStorage from "@react-native-async-storage/async-storage";

export default GetFromLocal = async () => {


    try {
        let data = await AsyncStorage.getItem('user_data');
        // console.log(data);
        return JSON.parse(data);

    } catch (error) {
        return {};
    }
};