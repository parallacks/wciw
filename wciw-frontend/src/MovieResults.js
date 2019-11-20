import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import MovieResultRow from "./MovieResultRow";
import "./MovieResults.css";

export default class MovieResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <MovieResultRow
            title={emojiData.title}
            poster={emojiData.poster}
            websites={emojiData.websites}
          />
        ))}
      </div>
    );
  }
}
