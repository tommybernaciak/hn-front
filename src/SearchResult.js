import React, { Component } from 'react';
import { Card, CardContent, IconButton, CardActions, Collapse } from '@material-ui/core';
import { ExpandMore, Mail } from '@material-ui/icons';
import Actions from './flux/Actions';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.saveResultToNotebook = this.saveResultToNotebook.bind(this);
  }

  saveResultToNotebook(data) {
    // Actions.saveResultToNotebook(data);
  }

  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    return (
      <Card>
        <CardContent>
          {this.props.result.title} by {this.props.result.author}
          <CardActions>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMore />
            </IconButton>
            <IconButton onClick={this.saveNote(this.props.result)} >
              <Mail/>
            </IconButton>
          </CardActions>
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <p>{this.props.result.created_at}</p>
          <p>{this.props.result.url}</p>
          <p>{this.props.result.title}</p>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default SearchResult;
