import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./MovieResultRow.css";
import SearchResultList from "./SearchResultList.js"

export default class MovieResultRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
	<div className='component-movie-result-row'>
	  <div className='rows'>
        <img alt={this.props.title} src={src} />
		<SearchResultList 
		    key={this.props.key}
            symbol={this.props.symbol}
            title={this.props.title}
		/>
	  </div>
    </div>
    );
  }
}
