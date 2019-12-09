import React, { PureComponent } from "react";
import {Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Preferences from './Preferences';


export default class Main extends PureComponent {
	render()
	{
    return (
	    <Switch>
		  <Route exact path='/' component={(props)=> <Home {...props} cookies={this.props.cookies}/>}></Route>
		  <Route exact path='/login' component={(props)=> <Login {...props} cookies={this.props.cookies} />}></Route>
		  <Route exact path='/signup' component={(props)=> <SignUp {...props} cookies={this.props.cookies} />}></Route>
		  <Route exact path='/preferences' component={(props)=> <Preferences {...props} cookies={this.props.cookies} />}></Route>
	    </Switch>
	  );
	}
}