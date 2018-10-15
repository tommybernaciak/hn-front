import React, { Component } from 'react';
import Store from './flux/Store'
import './App.css';
import SearchForm from './SearchForm'
import Navbar from './Navbar'
import Notebook from './Notebook'

class App extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getAppState = this.getAppState.bind(this);
    this.state = this.getAppState();
    console.log(this.state)
  }
  getAppState() {
    return Store.getAppState();
  }
  componentDidMount() {
    Store.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(this.getAppState);
  }

  render() {
    var displayedComponent = '';
    if(this.state.mode === 'NOTEBOOK') {
      displayedComponent = <Notebook state={this.state}/>;
    } else {
      displayedComponent = <SearchForm state={this.state}/>;
    }
    return (
      <div className="App">
        <Navbar state={this.state}/>
        {displayedComponent}
      </div>
    );
  }
}

export default App;
