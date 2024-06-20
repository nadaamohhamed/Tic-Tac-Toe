import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onClickHandler, turns }) {
	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleOnClick(rowIndex, colIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedGameBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedGameBoard;
	// 	});
	// 	onClickHandler();
	// }

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onClickHandler(rowIndex, colIndex)}
									disabled={playerSymbol != null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
