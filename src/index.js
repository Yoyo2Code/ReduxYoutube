import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YoutubeApi from './youtube_api';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';

let youtubeApi = new YoutubeApi();
const apiKey = youtubeApi.key;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: apiKey, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
