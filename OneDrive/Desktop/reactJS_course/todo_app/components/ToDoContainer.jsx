import React from "react";
import Todo from "./toDo"; // Import Todo component

function ToDoContainer({ toDos, deleteTodo }) {
  return (
    <div className="container">
      {toDos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
      ))}
    </div>
  );
}

export default ToDoContainer;
