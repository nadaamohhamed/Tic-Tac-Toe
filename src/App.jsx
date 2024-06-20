import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning-combinations.js";

function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";

	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}
	return currentPlayer;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	// const [activePlayer, setActivePlayer] = useState("X");

	let activePlayer = deriveActivePlayer(gameTurns);

	function onClickHandler(rowIndex, colIndex) {
		// setActivePlayer(activePlayer === "X" ? "O" : "X");
		setGameTurns((prevTurns) => {
			let currentPlayer = deriveActivePlayer(prevTurns);
			const updatedTurns = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currentPlayer,
				},
				...prevTurns,
			];
			return updatedTurns;
		});
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName='Player 1'
						symbol='X'
						isActive={activePlayer === "X"}
					/>
					<Player
						initialName='Player 2'
						symbol='O'
						isActive={activePlayer === "O"}
					/>
				</ol>
				<GameBoard turns={gameTurns} onClickHandler={onClickHandler} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
