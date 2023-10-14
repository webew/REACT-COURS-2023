import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
	// const [todos, setTodos] = useState(() =>
	// 	JSON.parse(localStorage.getItem("TODOS"))
	// );
	const [todos, setTodos] = useState([]);
	const todoNameRef = useRef();

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("TODOS"));
		console.log("====================================");
		console.log(storedTodos);
		console.log("====================================");
		if (storedTodos) setTodos(storedTodos);
	}, []); // appelé au 1er chargement du composant

	useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(todos));
	}, [todos]); // appelé à chaque modification de todos

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !toggleTodo.complete;
		setTodos(newTodos);
	}

	function handleAddToto(e) {
		const name = todoNameRef.current.value;
		if (name === "") return;
		const newTodo = { id: uuidv4(), name: name, complete: false };
		setTodos((prevTodos) => [...prevTodos, newTodo]);
		todoNameRef.current.value = null;
	}

	function handleClearComplete() {
		const newTodos = todos.filter((todo) => todo.complete === false);
		setTodos(newTodos);
	}

	return (
		<>
			<div>TodoList</div>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input type="text" ref={todoNameRef} />
			<button onClick={handleAddToto}>Add Todo</button>
			<button onClick={handleClearComplete}>Clear complete</button>
			<div style={{ color: "green" }}>
				{todos.filter((todo) => todo.complete).length} done
			</div>
			<div style={{ color: "green" }}>
				{todos.filter((todo) => !todo.complete).length} left to do
			</div>
		</>
	);
}

export default App;
