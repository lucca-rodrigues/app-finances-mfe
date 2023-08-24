import { api } from ".";
export default class TransactionsService {
  async index(backendToken) {
    const response = await api.get("/transactions/user/view?limit=50&offset=0", {
      headers: {
        Authorization: `Bearer Token ${backendToken}`,
      },
    });
    return response;
  }
}
