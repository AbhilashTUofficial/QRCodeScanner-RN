import axios from 'axios';
export const ConnectorCall = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;

  } catch (error) {
    return "network_error"

  }
};
