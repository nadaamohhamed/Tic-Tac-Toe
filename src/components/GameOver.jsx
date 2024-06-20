export default function GameOver({ winner, handleOnClick }) {
	return (
		<div id='game-over'>
			<h2>Game Over!</h2>
			{winner && <p>{winner} has won!</p>}
			{!winner && <p>It's a draw!</p>}
			<p>
				<button onClick={handleOnClick}>Rematch!</button>
			</p>
		</div>
	);
}
