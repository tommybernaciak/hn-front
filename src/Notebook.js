import React, { Component } from 'react';
import NoteBrowser from './NoteBrowser';
import NoteView from './NoteView'
import './Notebook.css';
import Actions from './flux/Actions';
import Store from './flux/Store';

class Notebook extends Component {

  constructor(props) {
    super(props);
    Actions.getNotebooks();

    this.getNotebooks = this.getNotebooks.bind(this);
  }

  getNotebooks() {
    return Store.getNotebooks();
  }

  render() {
    return (
      <div className="container">
        <div className="browser">
          <NoteBrowser notebooks={this.props.state.notebooks}/>
        </div>
        <div className="view">
          <NoteView />
        </div>
      </div>
    );
  }
}
export default Notebook;
