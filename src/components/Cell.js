import React, { Component } from 'react';
import './Column.css'

class Cell extends Component {
	hit(e){
		var targetId = e.target.id
		document.getElementById(targetId).style.backgroundColor = "red"
	}
	render(){
		return(
			<div id={this.props.id}
			 className={"row"+this.props.index + " " + "cell"}
			 onClick={this.hit}>
			</div>
		);
	}
}

export default Cell;
