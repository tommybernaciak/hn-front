import React, { Component } from 'react';
import { List, ListItem, Button, TextField } from '@material-ui/core';
import Actions from './flux/Actions';

class NoteBrowser extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.showNotebook = this.showNotebook.bind(this);
  }
  state = { title: '' };
  onChange(e) {
    e.persist();
    this.setState((state) => state.title += e.nativeEvent.data);
  }

  onSubmit(e) {
    e.preventDefault();
    Actions.createNotebook(this.state.title);
  }

  deleteNotebook(id) {
    Actions.deleteNotebook(id);
  }

  showNotebook(id) {
    Actions.showNotebook(id);
  }

  render() {
    var notebooks = '';
    if(this.props.notebooks) {
      notebooks = this.props.notebooks;
    } else {
      notebooks = [{title: 'empty'}];
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <TextField
              id="query"
              label="create"
              margin="normal"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            create
          </Button>
        </form>
        <List component="nav">
        { Object.keys(notebooks).map((item, i) => {
          return (
            <ListItem key={i}>
              <Button size="small" color="primary" onClick={this.showNotebook.bind(this, notebooks[item].id)}>
              {notebooks[item].title}
              </Button>
              <Button variant="outlined" color="primary" onClick={this.deleteNotebook.bind(this, notebooks[item].id)}>
                delete
              </Button>
            </ListItem>
          );
        })}
      </List>
      </div>
    );
  }
}
export default NoteBrowser;
