import React, { Component } from 'react';
import './Battleboard.css';
import Column from './Column'

class Battleboard extends Component {
	constructor(props){
		super(props)
		this.state = {
			boardSize: 10,
			ships: 5
		}
	}

	// Add ships to board to start game
	startGame(){
		// set initial list of ships
		var ships = []

		// TODO: Figure out how to use state instead of the hardcoded ship array length
		// TODO: Dedupe these random numbers

		for(let i = 0; i < 5; i++){
			ships.push(Math.floor(Math.random() * 100) + 1)
		}

		for(let ship in ships){
			var shipCell = ships[ship]
			document.getElementById(shipCell).style.backgroundColor = "yellow"
			// TODO: Add class of "ship" to cells in this list
		}
		console.log(ships)
	}

	render(){
		// set board to specified boardSize - render appropriate number of columns and rows
		var columns = [];
		for (let i = 0; i < this.state.boardSize; i++) {
			columns.push(i);
		}
		var board = columns.map(function(row, id){
			return (
				<Column key={id} id={id} boardSize={columns.length} />
			)
		})

		return(
			<div>
				<h1>Javascript Battleship</h1>
				<button onClick={this.startGame}>Begin!</button>
				<div id="battleboard">
				{board}
				</div>
			</div>
		);
	}
}

export default Battleboard;
