import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import sample from "./sample.json";
import Menu from "./Menu.js";
import Main from "./Main.js";
import { withCookies, Cookies } from 'react-cookie';
import './App.css'
import { instanceOf } from 'prop-types';

class App extends PureComponent {
  static propTyps = {
	  cookies: instanceOf(Cookies).isRequired
  }
  constructor(props)
  {
	  super(props);
	  
	  const {cookies } = props;
	  
	  this.state = {
		  login: cookies.get('name') || '',
		  preference: []
	  }
  }
  render() {
	return (
	  <div className='App'>
	    <div className='navMenu'>
	      <Menu cookies={this.props.cookies} login={this.state.login} />
		</div>
		<Main cookies={this.props.cookies} login={this.state.login} preference={this.state.preference} />
	  </div>
	);
  }
}

export default withCookies(App);