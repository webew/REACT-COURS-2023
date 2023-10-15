import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
	return todos.map((currentTodo) => (
		<Todo key={currentTodo.id} todo={currentTodo} toggleTodo={toggleTodo} />
	));
};

export default TodoList;
