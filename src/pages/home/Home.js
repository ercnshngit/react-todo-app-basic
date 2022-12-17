import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="grid grid-cols-[2fr_1fr] max-w-4xl mx-auto my-16">
      <div className="pr-8 ">
        {todos.length === 0 && <p className="error-badge">Todo bulunamadı.</p>}
        {todos && <TodoList todos={todos} setTodos={setTodos} />}
      </div>
      <div className="pl-8 ">
        <TodoForm setTodos={setTodos} />
      </div>
    </div>
  );
}
