import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Login extends PureComponent {
  static propTypes = {
    
  };

  render() {
    return (
       <div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Name</label>
            <input type="text" placeholder="Name" style={{margin: "3vh", height: "4vh"}}/>
            <label>Password</label>
            <input type="text" placeholder="Password" style={{margin: "3vh", height: "4vh"}}/>
            <input type="submit" value="Login" style={{marginLeft: "45vh", marginRight: "45vh", marginTop: "5vh"}} />
          </div>
        </div>
    );
  }
}
