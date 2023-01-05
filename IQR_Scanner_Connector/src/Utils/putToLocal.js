import AsyncStorage from "@react-native-async-storage/async-storage";

export default PutToLocal = (data) => {
    AsyncStorage.setItem("user_data", JSON.stringify(data));
    // console.log( AsyncStorage.getItem("user_data"))

};