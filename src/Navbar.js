import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Bookmark, Search } from '@material-ui/icons';
import Actions from './flux/Actions';
import Store from './flux/Store';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    Actions.testConnection();

    this.changeViewMode = this.changeViewMode.bind(this);
    this.getConnectionStatus = this.getConnectionStatus.bind(this);
  }

  getConnectionStatus() {
    return Store.getConnectionStatus();
  }

  changeViewMode(mode) {
    Actions.changeViewMode(mode);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          ​  HN Search Notebook
            <IconButton color="inherit" onClick={() => this.changeViewMode("NOTEBOOK")}>
              <Bookmark />
            </IconButton>
            <IconButton color="inherit" onClick={() => this.changeViewMode("SEARCHBAR")} >
              <Search/>
            </IconButton>
            <p className="info">api connection:{this.getConnectionStatus()}</p>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
