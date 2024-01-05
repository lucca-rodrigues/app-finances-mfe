import axios from "axios";
// const apiUrl = "http://localhost:3333";
// const apiUrl = "https://api-finances.innova-systems.tec.br";
const apiUrl = "http://192.168.0.229:3333";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
