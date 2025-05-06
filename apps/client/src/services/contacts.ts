import { baseApiUrl } from "@/lib/utils";
import axios from "axios";

let token: string | null = null;

const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

const getUserContacts = (userId: string) => {
  const config = {
    headers: { Authorization: token },
  };
  const req = axios.get(`${baseApiUrl}api/users/${userId}/contacts`, config);
  return req.then((res) => res.data);
};

export default { getUserContacts, setToken };
