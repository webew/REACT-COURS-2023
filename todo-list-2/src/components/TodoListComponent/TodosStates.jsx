const TodosStates = ({ todos }) => {
	return (
		<>
			<span style={{ color: "green" }}>
				{todos.filter((todo) => todo.done).length} done
			</span>
			<span> / </span>
			<span style={{ color: "red" }}>
				{todos.filter((todo) => !todo.done).length} left to do
			</span>
		</>
	);
};

export default TodosStates;
