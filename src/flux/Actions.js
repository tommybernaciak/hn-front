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

  showNotebook(id) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_NOTEBOOK,
      id: id
    })
  }

  getNotebookResults(data) {
    AppDispatcher.dispatch({
      actionType: Constants.GET_NOTEBOOK,
      results: data.results.results
    })

  }

  saveResultToNotebook(notebook_id, result) {
    AppDispatcher.dispatch({
      actionType: Constants.SAVE_RESULT_TO_NOTEBOOK,
      notebook_id: notebook_id,
      result: result
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
