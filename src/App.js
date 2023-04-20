import { useState } from "react";
import "./App.css";
import React from "react";
import uuid from "react-uuid";
import TodoList from "./component/TodoList";

const initProds = [
	{
		id: uuid(),
		name: "prod1",
		isEdit: false,
		status: false,
	},
	{
		id: uuid(),
		name: "prod2",
		isEdit: false,
		status: false,
	},
	{
		id: uuid(),
		name: "prod3",
		isEdit: false,
		status: false,
	},
];
function App() {
	const [value, setValue] = useState("");
	const [notes, setNotes] = useState(initProds);

	function addItem() {
		if (value.trim()) {
			let obj = {
				id: uuid(),
				name: value,
				isEdit: false,
				status: false,
			};
			setNotes([...notes, obj]);
		}
	}

	function changeNote(id, event) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, name: event.target.value };
				} else {
					return note;
				}
			})
		);
	}

	const result = notes.map((note) => {
		let elem;
		if (!note.isEdit) {
			elem = <span>{note.name}</span>;
		} else {
			elem = (
				<input
					type="text"
					value={note.name}
					onChange={(event) => changeNote(note.id, event)}
				/>
			);
		}
		return (
			<TodoList
				setNotes={setNotes}
				notes={notes}
				note={note}
				elem={elem}
			/>
		);
	});

	return (
		<div>
			<input
				value={value}
				type="text"
				onChange={(event) => setValue(event.target.value)}
			/>
			<button onClick={addItem}>add</button>
			<ul>{result}</ul>
		</div>
	);
}

export default App;
