import React, { Component } from 'react';
import Cell from './Cell'
import './Column.css'

class Column extends Component {


	render(){
		var rows = [];
		var id = this.props.id
		for (var i = 0; i < this.props.boardSize; i++) {
			rows.push(i);
		}
		var cells = rows.map(function(cell, index){
			return(
				<Cell key={index} index={index} id={"" + index + id} />
			)
		})
		return(
			<div className={"column" + " " + this.props.id}>
				{cells}
			</div>
		);
	}
}

export default Column;
