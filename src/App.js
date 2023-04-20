import { useState } from "react";
import "./App.css";
import React from "react";
import uuid from "react-uuid";
function id() {
	return uuid();
}
const initProds = [
	{
		id: id(),
		name: "prod1",
		status: false,
	},
	{
		id: id(),
		name: "prod2",
		status: false,
	},
	{
		id: id(),
		name: "prod3",
		status: false,
	},
];
function App() {
	const [value, setValue] = useState("");
	const [notes, setNotes] = useState(initProds);

	function startEdit(id) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, status: true };
				} else {
					return note;
				}
			})
		);
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

	function endEdit(id) {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, status: false };
				} else {
					return note;
				}
			})
		);
	}

	function remItem(id) {
		setNotes(notes.filter((note) => note.id !== id));
	}

	function addItem() {
		let obj = {
			id: id(),
			name: value,
			status: false,
		};
		setNotes([...notes, obj]);
	}

	const result = notes.map((note) => {
		let elem;
		if (!note.status) {
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
			<li key={note.id}>
				{elem}
				<button
					onClick={
						note.status
							? () => endEdit(note.id)
							: () => startEdit(note.id)
					}
				>
					{note.status ? "save" : "edit"}
				</button>
				<button onClick={() => remItem(note.id)}>delete</button>
			</li>
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
