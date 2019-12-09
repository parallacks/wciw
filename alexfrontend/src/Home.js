import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import sample from "./sample.json";
import Menu from "./Menu.js"
import { withRouter } from "react-router-dom";

import "./Home.css"
function getQuery(){
	var params = new URLSearchParams(window.location.search)
	console.log(window.location.href)
	if(params.has('q'))  {
		console.log("something is working");
		return params.get('q');
	}
	return ''
}

function fmap(callback) {
    return this.reduce((accum, ...args) => {
        let x = callback(...args);
        if(x !== undefined) {
            accum.push(x);
        }
        return accum;
    }, []);
}



class Home extends React.Component {
	
  
  
  constructor(props, context) {
    super(props, context);
	
	var param = getQuery();

    this.state = {
      movieData: [],
	  q: param,
    };
  }
  
  componentDidMount()
  {
	  if(this.state.q === "")
		{
		
		} else {
	    //const url = 'http://10.37.253.172:3000/api/search/movie/' + this.state.q + "?precision=fuzzy";
		const url = 'http://localhost:3001/api/search/movie/' + this.state.q + "?precision=fuzzy";
		const proxyurl = 'https://cors-anywhere.herokuapp.com/'
		//let response = await fetch(url)
		//let data = await response.json()
		   
		var data = sample;
		//fetch(url)
		//.then(response => response.json())
		//.then(data=> {
			console.log(JSON.stringify(data, null, 2));
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
		   //this.setState({q:this.state.q});
		//  }).catch( console.log("could not connect to server"));
        }
  }
  
  handleSearchChange = (event) => 
  {
	  if(event.key == 'Enter') {
		  //
		  this.props.history.push( "?q=" + event.target.value );
		  this.setState({q: event.target.value}, () => {this.componentDidMount()});
		  //
	  }	  
  };
  
  render() {
	if(this.state.q === "")
	{
		return (
		<div>
			<div className='App' style={{position: 'absolute',
						top: '50%',
						width: '100%',
						transform: 'translateY(-50%)'}}>
			  <Header />
			  <SearchInput textChange={this.handleSearchChange} initialText={this.state.q} />
			</div>
		</div>
	  );
	}
	return (
	<div>
		  <div className='App'>
			<Header />
			<SearchInput textChange={this.handleSearchChange} initialText={this.state.q} />
			<MovieResults movieData={this.state.movieData} />
		  </div>
	  </div>
	);
  }
}

export default withRouter(Home);