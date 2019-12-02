import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import emojiList from "./emojiList.json";
import sample from "./sample.json";
import AdComponent from "./AdComponent.js";
import AdSense from 'react-adsense';

/*
function readUrl(){
	var qString = window.location.search.slice(1)
	console.log(qString)
	var obj = {};
	if(qString) {
		qString = qString.split('#')[0];
		return params.get('q');
	}
	return ''
}*/

function getQuery(){
	var params = new URLSearchParams(window.location.search)
	console.log(window.location.href)
	if(params.has('q'))  {
		console.log("something is working");
		return params.get('q');
	}
	return ''
}

/**
 * Filter-map. Like map, but skips undefined values.
 *
 * @param callback
 */
function fmap(callback) {
    return this.reduce((accum, ...args) => {
        let x = callback(...args);
        if(x !== undefined) {
            accum.push(x);
        }
        return accum;
    }, []);
}



export default class App extends PureComponent {
	
  
  
  constructor(props) {
    super(props);
	
	var param = getQuery();
	var md = [];
	
	
    this.state = {
      movieData: md,
	  q: param
    };
  }
  
  componentDidMount()
  {
	  if(this.state.q === "")
		{
		
		} else {
	    const url = 'http://10.37.253.172:3000/api/search/movie/' + this.state.q + "?precision=fuzzy";
		const proxyurl = 'https://cors-anywhere.herokuapp.com/'
		//let response = await fetch(url)
		//let data = await response.json()
		   
		var data = sample;
		//fetch(url)
		//.then(response => response.json())
		//.then(data=> {
		   var result = data.map(movie => (
		   {
		       poster: movie.poster_small,
			   title: movie.title,
			   websites: (movie.free_web_sources.map( (item) => (
				  { 
			        link: item.link,
			        name: item.display_name.toLowerCase(), 
			        type: "free"
			      }
					)).concat (
					movie.subscription_web_sources.map( (item) => (
					  { 
						link: item.link,
						name: item.display_name.toLowerCase(), 
						type: "Sub"
					  }
					)))),
			    purchase: (fmap.call(movie.purchase_web_sources, item => item.formats.length > 0 ?  
			    { 
			     link: item.link,
			     name: item.display_name.toLowerCase(), 
			     type: "$" + item.formats[0].price //we need a price
			    } : undefined))
		   }));
		   this.setState({movieData:result}); 
		//}).catch( console.log("could not connect to server"));
        }
  }
  
  handleSearchChange = (event) => 
  {
	  if(event.key == 'Enter') {
		  //this.setState({movieData: getMovieData(event.target.value)});
		  var url = window.location.href.split('?')[0];
          url = url + "?q=" + event.target.value
		  window.location.assign(url)
		
	  }
	  
  };
  
  render() {
	if(this.state.q === "")
	{
		return (
		<div style={{position: 'absolute',
					top: '50%',
					width: '100%',
		            transform: 'translateY(-50%)'}}>
          <Header />
          <SearchInput textChange={this.handleSearchChange} initialText={this.state.q} />
        </div>
	  );
	}
    return (
	  <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} initialText={this.state.q} />
        <MovieResults movieData={this.state.movieData} />
      </div>
    );
  }
}

