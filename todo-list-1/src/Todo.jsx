import React from "react";

const Todo = ({ todo, toggleTodo }) => {
	function handleChange() {
		toggleTodo(todo.id);
	}

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={handleChange}
				/>
				{todo.name}
			</label>
		</div>
	);
};

export default Todo;
