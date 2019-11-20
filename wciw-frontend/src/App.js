import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import emojiList from "./emojiList.json";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    };
  }

  handleSearchChange = (event) => 
  {
	  
	  if(event.key == 'Enter') {
		this.setState({
		  movieData: emojiList
		});
		console.log(event.target.value);
	  }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <MovieResults emojiData={this.state.movieData} />
      </div>
    );
  }
}
