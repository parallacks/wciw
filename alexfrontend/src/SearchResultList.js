import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultList.css";


export default class SearchResultList extends PureComponent {

  render() {
	  const my_list = this.props.websites;
	if(my_list.length < 1)
	{
		return (null);
	}
	
    return (
      <div
        className="component-search-result-list"
      >
	   <div className='component-search-label'>
	   {this.props.name}
	   </div>
	   <div className='rows'>
	   {my_list.map( (my_list, i) => (
	      <div className='component-search-result-list-item' key={i}>
           <a href={my_list.link} style={{text_decoration: "none"}}  >
		   <img alt={my_list.name} src={"./"+ my_list.name + ".png"} />
		   <div className='component-cost'>{my_list.type}</div>
		   </a>
		  </div>
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
