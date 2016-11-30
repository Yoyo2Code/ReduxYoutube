import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <input
       value={ this.state.term }
       onChange={ e => this.setState({ term: e.target.value }) } />
    )
  }
}

export default SearchBar;
