import React from "react";

const DeleteTodo = ({ note, notes, setNotes }) => {
	function remItem(id) {
		setNotes(notes.filter((note) => note.id !== id));
	}
	return (
		<>
			<button onClick={() => remItem(note.id)}>delete</button>
		</>
	);
};

export default DeleteTodo;
