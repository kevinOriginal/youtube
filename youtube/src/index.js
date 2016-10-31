import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBuyqdvUbDmwoG4aNzor9eB7O_NoHR5md8';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('박효신 beautiful tomorrow');

  }

  videoSearch(term) {
    YTSearch({ key : API_KEY , term : term}, (crap) => {
      this.setState({
        videos : crap,
        selectedVideo: crap[0]
        });
    });

  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 );

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}


ReactDOM.render(<App />, document.querySelector('.container'));
