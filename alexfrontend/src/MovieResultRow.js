import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./MovieResultRow.css";
import SearchResultList from "./SearchResultList.js"

export default class MovieResultRow extends PureComponent {

  render() {
	if(this.props.websites.length < 1 && this.props.purchase.length < 1 )
	{
	  return ( null );
	}
    return (
	<div className='component-movie-result-row-background'>
	<div className='component-movie-result-row'>
        <img alt={this.props.title} src={this.props.poster} />
		<div className='component-results'>
		<SearchResultList 
			websites={this.props.websites}
			name="stream"
		/>
		<SearchResultList
			  websites={this.props.purchase}
			  name="rent or purchase"
		 />
		 </div>
	</div>
	</div>
    );
  }
}
