import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ImageCheckBox from "./ImageCheckBox.js"
import "./Preferences.css"
export default class Preferences extends PureComponent {
  static propTypes = {
    
  };
  constructor(props)
  {
	super(props);
	this.state = {
      netflix: true,
      hulu: true,
      prime: true,
      hbo: true,
      vudu: true,
      disney: true,
      google: true,
      youtube: true,
      verizon: true,
      itunes: true,
      tubi: true,
      fandango: true
    };
  }

  onClick(event)
  {
	  console.log('saved')
  }
  render() {
    return (
      <div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%',
			color: 'white'
          }}>
            <label style={{margin:'auto'}} >Preferred  Services</label>
            <div style={{display: "flex"}}>
              <ImageCheckBox name="netflix" enabled={this.state.netflix} onClick={(e) => this.setState({netflix:!this.state.netflix})} />
			  <ImageCheckBox name="disneyplus" enabled={this.state.disney} onClick={(e) => this.setState({disney:!this.state.disney})} />
			  <ImageCheckBox name="hulu" enabled={this.state.hulu} onClick={(e) => this.setState({hulu:!this.state.hulu})} />
			  <ImageCheckBox name="amazon" enabled={this.state.prime} onClick={(e) => this.setState({prime:!this.state.prime})} />
            </div>
            <div style={{display: "flex"}}>
              <ImageCheckBox name="hbo" enabled={this.state.hbo} onClick={(e) => this.setState({hbo:!this.state.hbo})} />
			  <ImageCheckBox name="vudu" enabled={this.state.vudu} onClick={(e) => this.setState({vudu:!this.state.vudu})} />
			  <ImageCheckBox name="google play" enabled={this.state.google} onClick={(e) => this.setState({google:!this.state.google})} />
			  <ImageCheckBox name="youtube" enabled={this.state.youtube} onClick={(e) => this.setState({youtube:!this.state.youtube})} />
            </div>
            <div style={{display: "flex"}}>
              <ImageCheckBox name="verizon on demand" enabled={this.state.verizon} onClick={(e) => this.setState({verizon:!this.state.verizon})} />
	          <ImageCheckBox name="itunes" enabled={this.state.itunes} onClick={(e) => this.setState({itunes:!this.state.itunes})} />
	          <ImageCheckBox name="tubi" enabled={this.state.tubi} onClick={(e) => this.setState({tubi:!this.state.tubi})} />
			  <ImageCheckBox name="fandangonow" enabled={this.state.fandango} onClick={(e) => this.setState({fandango:!this.state.fandango})} />
            </div>
			<div className="component-preference-submit-button" onClick={this.onClick.bind(this)} >
			Save
		   </div>
          </div>
        </div>
    );
  }
}
