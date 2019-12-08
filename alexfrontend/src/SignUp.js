import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './Login.css'

export default class SignUp extends PureComponent {
  static propTypes = {
    
  };
  
  constructor(props)
  {
	super(props);
	this.state = {
		password1: '',
		password2: '',
		name: '',
		message:''
	}
  }
  
  
  onClick(event)
  {
	  
	  if(this.state.password1 == this.state.password2)
	  {
		//do login logic from server,
		const { cookies } = this.props;
	    cookies.set('userId', this.state.name, { path: '/' });
		//when that is successful navigate to the preferences page
		this.props.history.push("/preferences");
	  }
	  
  };
  
  render() {
    return (
       <div >
          <div className='component-login' 
		    style={{display: "flex", flexDirection: "column",
                    position: 'absolute', left: '25%', top: '30%',
                    width: '50%'
            }}>
            <label>Name</label>
            <input type="text" placeholder="Name" onChange={evt => this.updateNameValue(evt)} name='name' />
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={evt => this.updatePassword1Value(evt)} name='password1' />
			<label>ReType Password</label>
			<input type="password" placeholder="Password" onChange={evt => this.updatePassword2Value(evt)} name='password2' />
			<div className="component-signup-retype"> {this.state.message} </div>
            <div className="component-login-button" onClick={this.onClick.bind(this)} >
			SignUp
		   </div>
          </div>
        </div>
    );
  }
  
  updateNameValue(evt) {
    this.setState({
      name: evt.target.value
    });
  }
  
  updatePassword1Value(evt) {
    this.setState({
      password1: evt.target.value
    });
	if(this.state.password2 != evt.target.value)
	{
		this.setState({
		  message: "passwords must match"
		});
	}
	else
	{
		this.setState({
		  message: ""
		});
	}
  }
  updatePassword2Value(evt) {
    this.setState({
      password2: evt.target.value
    });
	if(evt.target.value != this.state.password1)
	{
		this.setState({
		  message: "passwords must match"
		});
	}
	else
	{
		this.setState({
		  message: ""
		});
	}
  }
}
