import { useContext } from "react";
import { TodoContext } from "./TodoListComponent";

const Todo = ({ todo }) => {
	// passe la fonction toggleTodo depuis TodoListComponent
	const [toggleTodo] = useContext(TodoContext);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.done}
					onChange={() => toggleTodo(todo.id)} // appelle la fonction toggleTodo de TodoListComponent
				/>
				{todo.name}
			</label>
		</div>
	);
};

export default Todo;
