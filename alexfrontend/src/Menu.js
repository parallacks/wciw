import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./Menu.css"
export default class Menu extends PureComponent {

  
  render() {
    return (
	  <div className='component-menu'>
		  <div style={{float: "left", padding: "2vh"}}>
			<Link to={{pathname:'/'}}  style={{padding: "3vh", color: "inherit", textDecoration: "none"}}>WCIW</Link>
		  </div>
		  <div style={{float: "right", padding: "2vh", color:"white"}}>
			<Link to={{pathname:'/preference'}} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</Link>
			<Link to={{pathname:'/login'}} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</Link>
			
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