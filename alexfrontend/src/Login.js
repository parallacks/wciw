import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { instanceOf } from 'prop-types';
import './Login.css'
import {Cookies} from 'react-cookie';
export default class Login extends PureComponent {
  static propTypes = {
		cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props)
  {
	super(props);
	const { cookies } = props;
	this.state = {
		password: '',
		name: ''
	}
  }
  
  
  onClick(event)
  {
	  //do login logic from server,
	  console.log(this.state.password);
	  console.log(this.state.name);
	  //
	  const { cookies } = this.props;
	  cookies.set('userId', this.state.name, { path: '/' });
	  this.props.history.push("/");
  };
  
  render() {
    return (
       <div >
          <div className='component-login' style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Name</label>
            <input type="text" placeholder="Name" onChange={evt => this.updateNameValue(evt)} name='name' />
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={evt => this.updatePasswordValue(evt)} name='password' />
            <div className="component-login-button" onClick={this.onClick.bind(this)} >
			Login
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
  
  updatePasswordValue(evt) {
    this.setState({
      password: evt.target.value
    });
  }
}
