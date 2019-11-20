import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultList.css";


export default class SearchResultList extends PureComponent {

  render() {
	  const my_list = this.props.websites;
    return (
      <div
        className="component-search-result-list"
      >
	  <div className='rows'>
	  {my_list.map(my_list => (
          <a href={my_list.link} ><img alt={my_list.name} src={"./"+ my_list.name + ".png"} /></a>
        ))}
		</div>
      </div>
    );
  }
}

//{this.props.emojiData.map(emojiData => (
//          <MovieResultRow
//            key={emojiData.title}
//            symbol={emojiData.symbol}
//            title={emojiData.title}
//          />
//        ))}
