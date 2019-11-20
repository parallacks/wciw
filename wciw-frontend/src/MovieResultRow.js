import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./MovieResultRow.css";
import SearchResultList from "./SearchResultList.js"

export default class MovieResultRow extends PureComponent {

  render() {
    return (
	<div className='component-movie-result-row'>
	  <div className='rows'>
        <img alt={this.props.title} src={this.props.poster} />
		<SearchResultList 
            websites={this.props.websites}
		/>
	  </div>
    </div>
    );
  }
}
