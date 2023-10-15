import { useRef, useContext } from "react";
import { TodoContext } from "./TodoListComponent";

const TodoForm = () => {
	const [handleClearDone, handleAddTodo, handleCheckAll] =
		useContext(TodoContext);

	const todoNameRef = useRef();

	function handleAddTodoInner() {
		const name = todoNameRef.current.value;
		if (name === "") return;
		handleAddTodo(name);
		todoNameRef.current.value = null;
	}

	return (
		<>
			<div>
				<input type="text" ref={todoNameRef} />
				<button onClick={() => handleAddTodoInner()}>Add Todo</button>
			</div>
			<div>
				<button onClick={handleClearDone}>Clear Done</button>
				<button onClick={() => handleCheckAll(true)}>Check All</button>
				<button onClick={() => handleCheckAll(false)}>
					Uncheck All
				</button>
			</div>
		</>
	);
};

export default TodoForm;
