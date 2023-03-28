import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import TodosList from "./components/TodosList.js";

function App(props) {

  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
            input={input}
            setInput={setInput}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
