import Actions from '../flux/Actions';
class API {
  test() {
    this.get('/test_connection', Actions.showTest);
  }

  searchHN(query) {
    this.get(`/search_results/search?query=${query}`, Actions.showSearchResults);
  }

  notebooks() {
    this.get('/search_note_books', Actions.showNotebooks)
  }

  createNotebook(title) {
    this.post('/search_note_books', {title: title}, Actions.getNotebooks)
  }

  deleteNotebook(id) {
    this.delete('/search_note_books', id, Actions.getNotebooks)
  }

  showNotebook(id) {
    this.get(`/search_note_books/${id}`, Actions.getNotebookResults)
  }

  saveResultToNotebook(notebook_id, result) {
    this.post('/search_results', {notebook_id: notebook_id, result: result}, Actions.getNotebooks)
  }

  get(url, action) {
    window.fetch(url)
      .then(response => response.json())
      .then(json => action(json.data))
      .catch(error => console.log(error))
  }

  post(url, data, action) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .then(response => action())
    .catch(error => console.log(error));
  }

  delete(url, id, action) {
  return fetch(url + '/' + id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
  })
  .then(response => action())
  .catch(error => console.log(error));
  }
}
export default new API();
