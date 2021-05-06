import React, { useState } from "react";
import shortid from "shortid";

const Todolist = () => {
	let [homework, setHomework] = useState("");
	const [task, setTask] = useState([]);
	const thingsToDo = e => {
		e.preventDefault();
		console.log("hice enter");
		setHomework("");
		setTask([...task, { id: shortid.generate(), nameTask: homework }]);
	};
	const deleteTask = id => {
		//console.log(id);
		const arrayFiltrado = task.filter(item => item.id !== id);
		setTask(arrayFiltrado);
	};
	return (
		<>
			<div className="continer">
				<h1 className="text-center">To do list</h1>
				<form onSubmit={thingsToDo} className="col-5 m-auto">
					<input
						type="text"
						className="form-control"
						placeholder="Wath need to be done?"
						onChange={e => {
							setHomework(e.target.value);
						}}
						value={homework}
					/>
				</form>
				<div className="todolist col-5 m-auto ">
					<ul className="list-group">
						{task.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="lead">{item.nameTask}</span>
								<button
									className="btn btn-sm float-right mx-2"
									onClick={() => deleteTask(item.id)}>
									X
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Todolist;
