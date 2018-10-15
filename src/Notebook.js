import React, { Component } from 'react';
import NoteBrowser from './NoteBrowser';
import NoteView from './NoteView'
import './Notebook.css';
import Store from './flux/Store';

class Notebook extends Component {

  constructor(props) {
    super(props);
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
          <NoteView notebook_results={this.props.state.notebook_results}/>
        </div>
      </div>
    );
  }
}
export default Notebook;
