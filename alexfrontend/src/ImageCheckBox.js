import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './ImageCheckBox.css'

export default class ImageCheckBox extends PureComponent {
  
  onClick(event)
  {
	this.props.onClick(event)  
  };
  
  render() {
	if(this.props.enabled)
	{
      return (
	<div className="checkbox-enabled" onClick={this.onClick.bind(this)}>
          <img alt={this.props.name} src={"./"+ this.props.name + ".png"} />
        </div>
		)
    }
	return (
	   <div className="checkbox-disabled" onClick={this.onClick.bind(this)}>
	     <img alt={this.props.name} src={"./"+ this.props.name + ".png"} />
	   </div>
	)
  }
}
