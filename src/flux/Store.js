import AppDispatcher from './AppDispatcher';
import Constants from './Constants';
import EventEmitter from 'events';
import API from '../utils/Api.js';
const CHANGE_EVENT = 'CHANGE';
let _search_results = null;
let _page = 0;
let _mode = '';
let _status = 'error';
let _query = ''
let _notebooks = null;
let _notebooks_results = null;
class Store extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    switch(action.actionType) {
      case Constants.TEST:
        this.setConnectionStatus(action.status);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.TEST_CONNECTION:
        API.test();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SEARCH_HN:
        API.searchHN(action.query);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_SEARCH_RESULTS:
        this.setSearchResults(action.results, action.page);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.CHANGE_VIEW_MODE:
        this.setViewMode(action.mode);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.CREATE_NOTEBOOK:
        API.createNotebook(action.title);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.DELETE_NOTEBOOK:
        API.deleteNotebook(action.id);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_NOTEBOOK:
        API.showNotebook(action.id);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.GET_NOTEBOOK:
        this.setNotebookResults(action.results);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.GET_NOTEBOOKS:
        API.notebooks();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_NOTEBOOKS:
        this.setNotebooks(action.notebooks);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SAVE_RESULT_TO_NOTEBOOK:
        API.saveResultToNotebook(action.notebook_id, action.result);
        this.emit(CHANGE_EVENT);
        break;
      default:
        //
    }
    return true;
  }

  getAppState() {
    return {
      mode: this.getViewMode(),
      query: this.getSearchQuery(),
      search_results: this.getSearchResults().search_results,
      page: this.getSearchResults().page,
      notebooks: this.getNotebooks(),
      notebook_results: this.getNotebookResults()
    }
  }

  getConnectionStatus() {
    return _status;
  }

  setConnectionStatus(status) {
    _status = status
  }

  getViewMode() {
    return _mode;
  }

  setViewMode(mode) {
    _mode = mode;
  }

  getNotebooks() {
    return _notebooks;
  }

  setNotebooks(notebooks) {
    _notebooks = notebooks;
  }

  getNotebookResults() {
    return _notebooks_results;
  }

  setNotebookResults(notebooks_results) {
    _notebooks_results = notebooks_results;
  }

  getSearchQuery() {
    return _query;
  }

  setSearchQuery(query) {
    _query = query;
  }

  getSearchResults() {
    return {
      search_results: _search_results,
      page: _page
    }
  }

  setSearchResults(results, page) {
    _search_results = results;
    _page = page
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new Store();
