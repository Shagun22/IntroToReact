import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail.js';
import _ from 'lodash';

const API_KEY = 'AIzaSyAoXDf1VEBfGKAi954GOmO9XNu5P6dbzAE';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('surfboard');

  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
      console.log(videos);
      this.setState({
        videos:videos,
        selectedVideo: videos[0]

      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this HTML and put it in DOM.Pass an instance of a class in ReactDOM.
ReactDOM.render(<App />,document.querySelector('.container'));
