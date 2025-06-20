import { api, getTokenHeaders } from ".";
export default class TransactionsService {
  async index(backendToken) {
    const response = await api.get("/transactions/user/view?limit=50&offset=0", getTokenHeaders(backendToken));
    return response;
  }

  async findByPeriod({ year = 2023, month = 9, offset = 0, limit = 50, backendToken }) {
    const response = await api.get(
      `/transactions/user/view/period?year=${year}&month=${month}&limit=${limit}&offset=${offset}`,
      getTokenHeaders(backendToken)
    );
    return response;
  }

  async findById({ id, backendToken }) {
    const response = await api.get(`/transactions/${id}`, getTokenHeaders(backendToken));
    return response;
  }

  async getNextPage({ backendToken, nextPage }) {
    const response = await api.get(`${nextPage}`, getTokenHeaders(backendToken));
    return response;
  }

  async create({ backendToken, data }) {
    const response = await api.post(`/transactions`, data, getTokenHeaders(backendToken));
    return response;
  }

  async updateTransaction({ backendToken, id, data }) {
    const response = await api.patch(`/transactions/${id}`, data, getTokenHeaders(backendToken));
    return response;
  }

  async delete({ backendToken, id }) {
    const response = await api.delete(`/transactions/${id}`, getTokenHeaders(backendToken));
    return response;
  }
}
