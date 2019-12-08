import React, {Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { instanceOf } from 'prop-types';
import {Cookies} from 'react-cookie';
import "./Menu.css"
export default class Menu extends Component {
  static propTypes = {
	  cookies: instanceOf(Cookies).isRequired
  }
  constructor(props)
  {
	  super(props);
	  const {cookies} = props;
	  this.state = {
		  userId: cookies.get('userId') || ''
	  }
  }


  logOut()
  {
	  const { cookies } = this.props;
	  cookies.set('userId', '', { path: '/' });
  }
  
  render() {
    const { cookies } = this.props;
    var out = cookies.get('userId') || '';
    if(out != this.state.userId)
    {
	    this.setState({userId: out})
    }
	if(this.state.userId != '')
	{
	  return (
	   <div className='component-menu'>
		 <div style={{float: "left", padding: "2vh"}}>
			<Link to={{pathname:'/'}}  style={{padding: "3vh", color: "inherit", textDecoration: "none"}}>WCIW</Link>
		  </div>
		  <div className='rows' style={{display:'table', float: "right", padding: "2vh", color:"white"}}>
			<Link to={{pathname:'/preferences'}} style={{ padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</Link>
			<div className='component-logout' onClick={this.logOut.bind(this)}> LogOut </div>
		  </div>
	    </div>
	  );
	}
    return (
	  <div className='component-menu'>
		  <div style={{float: "left", padding: "2vh"}}>
			<Link to={{pathname:'/'}}  style={{padding: "3vh", color: "inherit", textDecoration: "none"}}>WCIW</Link>
		  </div>
		  <div style={{float: "right", padding: "2vh", color:"white"}}>
			<Link to={{pathname:'/login'}} style={{ padding: "3vh", color: "white", textDecoration: "none"}}>Login</Link>
			<Link className='component-sign-up'
			      style={{color: "inherit",
                          textDecoration: "none",
						  textAlign:"center",
                          border: "1.5px solid #ffe",
                          padding: "3px",
                          borderRadius : "10px",
                          boxSizing: 'border-box'}}
			      to={{pathname:'/signup'}} > Sign Up </Link>

		  </div>
	  </div>
    );
  }
}