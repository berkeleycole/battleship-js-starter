import React, { Component } from 'react';
import './Column.css'

class Cell extends Component {
	// CHECK IF CLICKED CELL HAS A SHIP OR NOT
	hit(e){
		var target = document.getElementById(e.target.id)
		if(target.classList.contains("cellship")){
			target.style.backgroundColor = "red"
		} else {
			target.style.backgroundColor = "gray"
		}
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
