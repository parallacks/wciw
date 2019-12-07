import React, { PureComponent } from "react";
import {Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
//import SignUp from './SignUp';
//import Preferences from './SignUp';


export default class Main extends PureComponent {
	render()
	{
    return (
	    <Switch>
		  <Route exact path='/' component={(props)=> <Home {...props}/>}></Route>
		  <Route exact path='/login' component={(props)=> <Login {...props}/>}></Route>
	    </Switch>
	  );
	}
}