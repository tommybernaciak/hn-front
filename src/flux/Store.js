import AppDispatcher from './AppDispatcher';
import Constants from './Constants';
import EventEmitter from 'events';
import API from '../utils/Api.js';
const CHANGE_EVENT = 'CHANGE';
let _results = [];
let _mode = '';
let _status = 'error'
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
        this.setSearchResults(action.results);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.CHANGE_VIEW_MODE:
        this.setViewMode(action.mode);
        this.emit(CHANGE_EVENT);
        break;
      default:
        //
    }
    return true;
  }

  setConnectionStatus(status) {
    _status = status
  }

  getConnectionStatus() {
    return _status;
  }

  getViewMode() {
    return _mode;
  }

  setViewMode(mode) {
    _mode = mode;
  }

  setSearchResults(results) {
    _results = results;
  }
  getSearchResults() {
    return _results;
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new Store();
