import axios from 'axios';

export const ConnectorCall = async (url) => {
  const response = await axios.get(url);
  console.log(response)
  return response;
};
