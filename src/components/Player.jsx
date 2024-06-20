import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleOnChange(event) {
		setPlayerName(event.target.value);
	}

	function handleEditClick() {
		setIsEditing((editing) => !editing);
	}
	let editablePlayerName;

	if (isEditing) {
		editablePlayerName = (
			<input
				type='text'
				required
				value={playerName}
				onChange={handleOnChange}
			/>
		);
	} else {
		editablePlayerName = <span className='player-name'>{playerName}</span>;
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
