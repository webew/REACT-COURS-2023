import { useContext } from "react";
import { TodoContext } from "./TodoListComponent";

const Todo = ({ todo }) => {
	const [toggleTodo] = useContext(TodoContext);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.done}
					onChange={() => toggleTodo(todo.id)}
				/>
				{todo.name}
			</label>
		</div>
	);
};

export default Todo;
