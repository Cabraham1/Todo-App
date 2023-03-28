import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
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
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
