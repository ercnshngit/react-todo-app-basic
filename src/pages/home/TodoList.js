export default function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="relative flex items-center justify-between p-4 mx-auto my-4 border-2 rounded shadow border-l-green-500 overflow-clip"
          >
            <span className="text-lg">{todo.todo}</span>

            <button
              className="button-base "
              onClick={() =>
                setTodos((prev) => prev.filter((i) => i.id !== todo.id))
              }
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}
