import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';

function App(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
            input={input}
            setInput={setInput}
          />
        </div>
     </div>
    </div>
  );
}

export default App;
