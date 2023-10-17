import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
	return todos.map((currentTodo) => (
		<Todo key={currentTodo.id} todo={currentTodo} />
	));
};

export default TodoList;
