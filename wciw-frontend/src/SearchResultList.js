import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultList.css";

const my_list=[
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  },
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
  ,
  {
    "l": "https://hulu.com",
    "name": "hulu"
  },
  {
    "l": "https://amazon.com",
    "name": "amazon"
  },
  {
    "l": "https://netflix.com",
    "name": "netflix"
  }
]


export default class SearchResultList extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-search-result-list"
        data-clipboard-text={this.props.symbol}
      >
	  <div className='rows'>
	  {my_list.map(my_list => (
          <a href={my_list.l} ><img alt={my_list.name} src={"./"+ my_list.name + ".png"} /></a>
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
