import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';

class NoteBrowser extends Component {
  render() {
    return (
      <div>
        <List component="nav">
        <ListItem button>
          something
        </ListItem>
        <ListItem button>
          something else
        </ListItem>
      </List>
      </div>
    );
  }
}
export default NoteBrowser;
