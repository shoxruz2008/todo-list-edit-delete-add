import React from "react";

const CheckList = ({ note, setNotes, notes }) => {
	function handleChange(id) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, status: !note.status };
				} else {
					return note;
				}
			})
		);
	}
	return (
		<>
			<input
				type="checkbox"
				checked={note.status}
				onChange={() => handleChange(note.id)}
			/>
		</>
	);
};

export default CheckList;
