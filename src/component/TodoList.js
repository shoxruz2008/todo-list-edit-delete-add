import React from "react";
import Edit from "./Edit";
import DeleteTodo from "./DeleteTodo";
import CheckList from "./CheckList";

const TodoList = ({ setNotes, notes, note, elem }) => {
	return (
		<>
			<li key={note.id} className={note.status ? "complete" : ""}>
				<CheckList note={note} setNotes={setNotes} notes={notes} />
				{elem}
				<Edit note={note} setNotes={setNotes} notes={notes} />
				<DeleteTodo note={note} setNotes={setNotes} notes={notes} />
			</li>
		</>
	);
};

export default TodoList;
