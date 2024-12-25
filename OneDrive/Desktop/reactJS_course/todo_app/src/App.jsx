import "./App.css";
import InputContainer from "../components/InputContainer";
import ToDoContainer from "../components/ToDoContainer";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [toDos, setTodos] = useState([]);

  // Handle input changes
  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  // Add new todo
  function addTodo() {
    if (inputVal.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  // Delete todo
  function deleteTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>To-Do List</h1>
      {/* Pass props to InputContainer */}
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      {/* Pass props to ToDoContainer */}
      <ToDoContainer toDos={toDos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
