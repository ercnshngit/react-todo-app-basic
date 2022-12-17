import { useEffect, useState } from "react";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { todo: todo, id: Math.random() }]);
    setTodo("");
  };

  return (
    <>
      <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-gray-400">
        New Todo
      </h2>
      <form onSubmit={handleSubmit} className="p-5 bg-primary rounded-xl">
        <label>
          <span className="block my-2 font-bold text-white">todo:</span>
          <input
            required
            type="text"
            className="input-base"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
        </label>

        <button className="w-full mt-4 text-white border-white button-base">
          Add New
        </button>
      </form>
    </>
  );
}
