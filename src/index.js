import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD8JJ3Io6mpqcxQQB5qHRoOo69X58dHxPA';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('tesla');

  }

  videoSearch(term){
    YTSearch({key: API_KEY,term: term}, (videos) => {
      //or we can use {videos: videos}. In ES6, matching key and value
      //can be condensed
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
};

ReactDOM.render(
  <App/>, document.querySelector('.container'));
