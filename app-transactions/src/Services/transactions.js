import { api, getTokenHeaders } from ".";
export default class TransactionsService {
  async index(backendToken) {
    const response = await api.get("/transactions/user/view?limit=50&offset=0", getTokenHeaders(backendToken));
    return response;
  }

  async getNextPage(backendToken, nextPage) {
    const response = await api.get(`${nextPage}`, getTokenHeaders(backendToken));
    return response;
  }
}
