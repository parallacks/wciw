import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import emojiList from "./emojiList.json";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //filteredEmoji: filterEmoji("", 20)
    };
  }

  //handleSearchChange = event => {
  //  this.setState({
      //filteredEmoji: filterEmoji(event.target.value, 20)
  //  });
  //};

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <MovieResults emojiData={emojiList} />
      </div>
    );
  }
}
