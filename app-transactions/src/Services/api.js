import axios from "axios";

const api = axios.create({
  // baseURL: "https://api-finances.innova-systems.tec.br",
  baseURL: "http://192.168.0.229:3333",
});

export default api;
