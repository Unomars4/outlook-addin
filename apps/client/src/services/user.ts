import axios from "axios";
import { baseApiUrl } from "@/lib/utils";

const login = async (credentials: { email: string; password: string }) => {
  const userInfo = await axios.post(`${baseApiUrl}api/auth/login`, credentials);
  return userInfo.data;
};

const signup = async (credentials) => {
  const userInfo = await axios.post(
    `${baseApiUrl}api/auth/signup`,
    credentials,
  );
  return userInfo.data;
};

export default { login };
