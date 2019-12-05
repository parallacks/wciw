import React, { Component }  from 'react';
import ListItem from './ListItem.js';

class SearchResults extends Component
{
  constructor() {
    super();
    this.textChanged = this.textChanged.bind(this)
    this.searchRequest = this.searchRequest.bind(this)
    this.optionChanged = this.optionChanged.bind(this)
    this.state = {
      query: "",
      movieData: [],
      initialSearch: true,
      selectedOption: 'exact'
    };
  }

  textChanged(e) {
    this.setState({
      query: e.target.value
    });
  }

  searchRequest(e) {
    console.log(this.state.query);
    if (this.state.initialSearch) {
      this.setState({
        initialSearch: false
      });
    }
    //Here make a request to the server
    const url = 'http://10.37.253.172:3000/api/search/movie/' + this.state.query + "?precision=" + this.state.selectedOption;
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({movieData: []})
      this.setState({movieData: data});
    })
  }

  optionChanged(e) {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render()
  {
    if (this.state.initialSearch) {
      this.movies = this.state.movieData.map(function(movie){
        //For now just give links to the four streaming services that we have
        return <ListItem poster={movie.poster_small} title={movie.title} sources={movie} />;
      });
      return (
        <div style={{
          position: 'absolute', left: '25%', top: '50%',
          width: '50%'
        }}>
          <div>Where Can I Watch?</div>
          <form style={{fontSize: '10px', display: 'flex'}}>
            <div className="radio">
              <label>
                <input type="radio" value="exact" checked={this.state.selectedOption === 'exact'} onChange={this.optionChanged} />
                Exact Search
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="fuzzy" checked={this.state.selectedOption === 'fuzzy'} onChange={this.optionChanged} />
                Smart Search
              </label>
            </div>
          </form>
          <div style={{display: 'flex'}}>
            <input type="text" placeholder="Search..." onChange={this.textChanged} style={{
              width: '100%',
              height: '5vh'
            }} />
            <input type="submit" value="Search" onClick={this.searchRequest} />
          </div>
        </div>
      );
    } else {
      this.movies = this.state.movieData.map(function(movie){
        //For now just give links to the four streaming services that we have
        return <ListItem poster={movie.poster_small} title={movie.title} sources={movie} />;
      });
      return (
        <div style={{
          position: 'absolute', left: '25%', top: '5%',
          width: '50%'
        }}>
          <div>Where Can I Watch?</div>
          <form style={{fontSize: '10px', display: 'flex'}}>
            <div className="radio">
              <label>
                <input type="radio" value="exact" checked={this.state.selectedOption === 'exact'} onChange={this.optionChanged} />
                Exact Search
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="fuzzy" checked={this.state.selectedOption === 'fuzzy'} onChange={this.optionChanged} />
                Smart Search
              </label>
            </div>
          </form>
          <div style={{display: 'flex'}}>
            <input type="text" placeholder="Search..." onChange={this.textChanged} style={{
              width: '100%',
              height: '5vh'
            }} />
            <input type="submit" value='Search' onClick={this.searchRequest} />
          </div>
          <div style={{height: '500px', overflowY: 'scroll'}}>
            {this.movies}
          </div>
        </div>
      );
    }
  }
}

export default SearchResults;
