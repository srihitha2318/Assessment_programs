import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {todos.slice(0, 20).map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <Link to={`/todo/${todo.id}`}>
            <strong>{todo.title}</strong>
          </Link>
          <p>Status: {todo.completed ? "✅ Completed" : "❌ Pending"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
