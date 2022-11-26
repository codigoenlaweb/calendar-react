import axios from "axios";
import { getEnvVariables } from "../helper/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});
// config extra
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem("access_token"),
  };

  return config;
});

export default calendarApi;
