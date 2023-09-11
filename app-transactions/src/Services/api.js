import axios from "axios";

const api = axios.create({
  baseURL: "https://api-finances.innova-systems.tec.br",
});

export default api;
