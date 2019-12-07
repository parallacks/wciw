import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import sample from "./sample.json";
import Menu from "./Menu.js";
import Main from "./Main.js";
import './App.css'

export default class App extends PureComponent {
  constructor(props)
  {
	  super(props);
	  this.state = {
		  login: '',
		  preference: []
	  }
  }
  render() {
	return (
	  <div className='App'>
	    <div className='navMenu'>
	      <Menu />
		</div>
		<Main />
	  </div>
	);
  }
}

