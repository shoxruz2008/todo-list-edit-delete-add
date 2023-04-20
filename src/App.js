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
		isEdit: false,
		status: false,
	},
	{
		id: id(),
		name: "prod2",
		isEdit: false,
		status: false,
	},
	{
		id: id(),
		name: "prod3",
		isEdit: false,
		status: false,
	},
];
function App() {
	const [value, setValue] = useState("");
	const [notes, setNotes] = useState(initProds);
	// const [checked, setChecked] = useState(true);

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
					return { ...note, isEdit: false };
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
		if (value.trim()) {
			let obj = {
				id: id(),
				name: value,
				isEdit: false,
				status: false,
			};
			setNotes([...notes, obj]);
		}
	}

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
			// 1 componetnt
			<li key={note.id} className={note.status ? "complete" : ""}>
				<input
					type="checkbox"
					checked={note.status}
					onChange={() => handleChange(note.id)}
				/>
				{elem}
				<button
					onClick={
						note.isEdit
							? () => endEdit(note.id)
							: () => startEdit(note.id)
					}
				>
					{note.isEdit ? "save" : "edit"}
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
