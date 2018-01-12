import React, { Component } from 'react';
import './Battleboard.css';
import Column from './Column'

// TODO: Create torpedo counter
// TODO: Create ship counter
// TODO: Build out functionality for win/lose scenarios

class Battleboard extends Component {
	constructor(props){
		super(props)
		this.state = {
			boardSize: 10,
			ships: 5,
			torpedos: 25
		}
	}

	// Add ships to board to start game
	startGame(){
		// set initial list of ships
		var ships = []

		// TODO: Figure out how to use state instead of the hardcoded ship array length
		// TODO: Dedupe these random numbers
		// TODO: I think this loop would only find numbers 1-99 - so the 0 cell would never have a ship
		for(let i = 0; i < 5; i++){
			ships.push(Math.floor(Math.random() * 99) + 1)
		}

		for(let ship in ships){
			var shipCell = ships[ship]
			// SEE THE SHIPS:
			// document.getElementById(shipCell).style.backgroundColor = "yellow"
			// ADD CLASS OF "cellship" to each cell with a ship
			document.getElementById(shipCell).className += "ship"
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
