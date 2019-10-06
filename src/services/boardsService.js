import httpClient from '../utils/httpClient';

class BoardsService {
  static getBoards() {
    return httpClient.get('/boards');
  }
  static getByIdColumn(id) {
    return httpClient.get(`/boards/${id}`);
  }
  static postBoards(data) {
    return httpClient.post('/boards', { data });
  }
}

export default BoardsService;
