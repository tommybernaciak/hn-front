import Actions from '../flux/Actions';
class API {
  test() {
    this.get('/test_connection', Actions.showTest);
  }

  searchHN(query) {
    console.log(query)
    this.get(`/search?query=${query}`, Actions.showSearchResults);
  }

  get(url, action) {
    window.fetch(url)
      .then(response => response.json())
      .then(json => action(json.data))
      .catch(error => console.log(error))
  }
}
export default new API();
