import axios from 'axios';

export const ConnectorCall = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
