import AppDispatcher from './AppDispatcher';
import Constants from './Constants';
import EventEmitter from 'events';
import API from '../utils/Api.js';
const CHANGE_EVENT = 'CHANGE';
let _results = null;
let _page = 0;
let _mode = '';
let _status = 'error';
let _query = ''
let _notebooks = null;
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
      case Constants.GET_NOTEBOOKS:
        API.notebooks();
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_NOTEBOOKS:
        this.setNotebooks(action.notebooks);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SAVED:
        alert('saved')
        this.emit(CHANGE_EVENT);
        break;
      case Constants.DELETED:
        alert('deleted')
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
      results: this.getSearchResults().results,
      page: this.getSearchResults().page,
      notebooks: this.getNotebooks()
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

  getSearchQuery() {
    return _query;
  }

  setSearchQuery(query) {
    _query = query;
  }

  getSearchResults() {
    return {
      results: _results,
      page: _page
    }
  }

  setSearchResults(results, page) {
    _results = results;
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
