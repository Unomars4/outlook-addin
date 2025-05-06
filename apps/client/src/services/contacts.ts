import axios from "axios";
const baseUrl = "/contacts";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAllContacts = () => {
  const req = axios.get(serverLocation);
  return req.then((res) => res.data);
};

export default { getAllContacts, setToken };
