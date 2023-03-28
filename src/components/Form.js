import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { title, id, completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
    setEditTodo(null);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const OnFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
      setInput("");
    }
  };

  return (
    <form onSubmit={OnFormSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a Todo..."
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        {editTodo ? "Ok" : "Add"}
      </button>
    </form>
  );
};

export default Form;
