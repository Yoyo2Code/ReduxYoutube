import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YoutubeApi from './youtube_api'

const apiKey = new YoutubeApi().key;

const App = () => {
  return(
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
