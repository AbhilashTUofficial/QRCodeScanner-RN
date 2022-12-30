import AsyncStorage from "@react-native-async-storage/async-storage";

export default PutDataToLocal = (data) => {
    console.log(data)
    AsyncStorage.setItem("user_data", JSON.stringify(data));

};