import { createContext, useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import TodosStates from "./TodosStates";

export const TodoContext = createContext();

function TodoListComponent() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("TODOS"));
		if (storedTodos) setTodos(storedTodos);
	}, []); // appelé au 1er chargement du composant

	useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(todos));
	}, [todos]); // appelé à chaque modification de todos

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.done = !toggleTodo.done;
		setTodos(newTodos);
	}

	function handleClearDone() {
		const newTodos = todos.filter((todo) => todo.done === false);
		setTodos(newTodos);
	}
	function handleAddTodo(name) {
		const newTodo = { id: uuidv4(), name: name, done: false };
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	}
	function handleCheckAll(boolcheck) {
		const allTodos = [...todos];
		allTodos.map((todo) => (todo.done = boolcheck));
		setTodos(allTodos);
	}

	return (
		<>
			<div>TodoList</div>
			<TodosStates todos={todos} />
			<TodoContext.Provider value={[toggleTodo]}>
				<TodoList todos={todos} toggleTodo={toggleTodo} />
			</TodoContext.Provider>
			<TodoContext.Provider
				value={[handleClearDone, handleAddTodo, handleCheckAll]}
			>
				<TodoForm />
			</TodoContext.Provider>
		</>
	);
}

export default TodoListComponent;
