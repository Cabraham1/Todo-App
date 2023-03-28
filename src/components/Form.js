import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const OnFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
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
        Add
      </button>
    </form>
  );
};

export default Form;
