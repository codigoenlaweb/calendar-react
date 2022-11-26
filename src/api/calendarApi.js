import axios from "axios";

const calendarApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
