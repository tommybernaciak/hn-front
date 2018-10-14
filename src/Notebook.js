import React, { Component } from 'react';
import NoteBrowser from './NoteBrowser';
import NoteView from './NoteView'
import './Notebook.css';

class Notebook extends Component {
  render() {
    return (
      <div className="container">
        <div className="browser">
          <NoteBrowser />
        </div>
        <div className="view">
          <NoteView />
        </div>
      </div>
    );
  }
}
export default Notebook;
