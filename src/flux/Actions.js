import AppDispatcher from './AppDispatcher';
import Constants from './Constants';
class Actions {
  searchHN(query) {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_HN,
      query: query
    })
  }

  showSearchResults(results) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_SEARCH_RESULTS,
      results: results
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
