import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
// const API_KEY = AIzaSyAH0uNq0ZRzHJkzDa2pdfnL4leTivFTIfU

const App = () => {
  return(
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
