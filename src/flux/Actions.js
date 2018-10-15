import AppDispatcher from './AppDispatcher';
import Constants from './Constants';
class Actions {
  searchHN(query) {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_HN,
      query: query
    })
  }

  getNotebooks() {
    AppDispatcher.dispatch({
      actionType: Constants.GET_NOTEBOOKS,
    })
  }

  showNotebooks(notebooks) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_NOTEBOOKS,
      notebooks: notebooks
    })
  }

  createNotebook(title) {
    AppDispatcher.dispatch({
      actionType: Constants.CREATE_NOTEBOOK,
      title: title
    })
  }

  deleteNotebook(id) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_NOTEBOOK,
      id: id
    })
  }

  showNotebook(notebooks) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_NOTEBOOKS,
      notebooks: notebooks
    })
  }

  saveNote(note) {
    AppDispatcher.dispatch({
      actionType: Constants.SAVE_NOTE,
      note: note
    })
  }

  showSearchResults(results) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_SEARCH_RESULTS,
      results: results.results,
      page: results.page
    })
  }

  changeViewMode(mode) {
    AppDispatcher.dispatch({
      actionType: Constants.CHANGE_VIEW_MODE,
      mode: mode
    })
  }

  testConnection() {
    AppDispatcher.dispatch({
      actionType: Constants.TEST_CONNECTION
    })
  }

  showTest(status) {
    AppDispatcher.dispatch({
      actionType: Constants.TEST,
      status: status
    })
  }
}
export default new Actions();
