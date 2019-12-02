import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import MovieResultRow from "./MovieResultRow";
import "./MovieResults.css";

export default class MovieResults extends PureComponent {
  static propTypes = {
    movieData: PropTypes.array
  };

  render() {
    return (
      <div className="component-movie-results">
        {this.props.movieData.map( (movieData, i) => (
          <MovieResultRow
		    key={i}
            title={movieData.title}
            poster={movieData.poster}
            websites={movieData.websites}
			purchase={movieData.purchase}
          />
        ))}
      </div>
    );
  }
}
