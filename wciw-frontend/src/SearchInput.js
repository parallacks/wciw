import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
	  inputValue: props.initialText
    };
  }
  
  static propTypes = {
    textChange: PropTypes.func,
	initialText: PropTypes.string
  };
  
  handleKey = event => {
	
    this.props.textChange(event);
  };

  onClick = event =>
  {
	  var ev = { key: 'Enter', target: {value:this.state.inputValue}};
	  this.props.textChange(ev);
  };
  
  render() {
    return (
      <div className="component-search-input">
	    <div>
		<span>
           <input value={this.state.inputValue} onKeyDown={this.handleKey} onChange={(e) => {this.setState({inputValue: e.target.value})}} />
		   <div className="component-search-input-button" onClick={this.onClick} >
			Search
		   </div>
		</span>
        </div>
      </div>
    );
  }
}
