import React from 'react';
import PropTypes from 'prop-types';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return item;
      }),
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <div>
            <button
              type="button"
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle" />
            </button>
            <button
              type="button"
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit" />
            </button>
            <button
              type="button"
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditTodo: PropTypes.func.isRequired,
};

export default TodosList;
