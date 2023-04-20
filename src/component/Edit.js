import React from "react";

const Edit = ({ note, setNotes, notes }) => {
	function startEdit(id) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, isEdit: true };
				} else {
					return note;
				}
			})
		);
	}

	function endEdit(id) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, isEdit: false };
				} else {
					return note;
				}
			})
		);
	}
	return (
		<>
			<button
				onClick={
					note.isEdit
						? () => endEdit(note.id)
						: () => startEdit(note.id)
				}
			>
				{note.isEdit ? "save" : "edit"}
			</button>
		</>
	);
};

export default Edit;
