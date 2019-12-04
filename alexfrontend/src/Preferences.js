import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MovieResultRow from "./MovieResultRow";
import "./MovieResults.css";

export default class Preferences extends PureComponent {
  static propTypes = {
    movieData: PropTypes.array
  };

  render() {
    return (
      <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Services</label>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.netflix} onChange={(e) => this.setState({netflix: e.target.checked})} style={{margin: "3vh"}}/>Netflix</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.hulu} onChange={(e) => this.setState({hulu: e.target.checked})} style={{margin: "3vh"}}/>Hulu</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.prime} onChange={(e) => this.setState({prime: e.target.checked})} style={{margin: "3vh"}}/>Amazon Prime</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.hbo} onChange={(e) => this.setState({hbo: e.target.checked})} style={{margin: "3vh"}}/>HBO</label>
            </div>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.vudu} onChange={(e) => this.setState({vudu: e.target.checked})} style={{margin: "3vh"}}/>Vudu</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.disney} onChange={(e) => this.setState({disney: e.target.checked})} style={{margin: "3vh"}}/>Disney Plus</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.google} onChange={(e) => this.setState({google: e.target.checked})} style={{margin: "3vh"}}/>Google Play</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.youtube} onChange={(e) => this.setState({youtube: e.target.checked})} style={{margin: "3vh"}}/>Youtube</label>
            </div>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.verizon} onChange={(e) => this.setState({verizon: e.target.checked})} style={{margin: "3vh"}}/>Verizon On Demand</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.itunes} onChange={(e) => this.setState({itunes: e.target.checked})} style={{margin: "3vh"}}/>Itunes</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.tubi} onChange={(e) => this.setState({tubi: e.target.checked})} style={{margin: "3vh"}}/>Tubi TV</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.fandango} onChange={(e) => this.setState({fandango: e.target.checked})} style={{margin: "3vh"}}/>Fandango</label>
            </div>
            <input type="submit" value="Save" style={{marginLeft: "45vh", marginRight: "45vh", marginTop: "5vh"}} />
          </div>
        </div>
    );
  }
}
