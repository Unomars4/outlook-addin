import axios from "axios";
const baseUrl = "/api/login";

const login = async (credentials) => {
  const userInfo = await axios.post(baseUrl, credentials);
  return userInfo.data;
};

const signup = async (credentials) => {
  const userInfo = await axios.post(baseUrl, credentials);
  return userInfo.data;
};

export default { login };
