import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this._onInputChange(e.target.value)} />
      </div>
    )
  }

  _onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
