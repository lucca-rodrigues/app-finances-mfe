import { api } from ".";

export default class AuthService {
  async auth(data) {
    const response = await api.post("/auth/login", data);
    return response;
  }

  async create(data) {
    const response = await api.post("/users", data);
    return response;
  }
}
