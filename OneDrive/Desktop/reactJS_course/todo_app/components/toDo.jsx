import React from "react";

function Todo({ todo, deleteTodo }) { // Destructure todo and deleteTodo from props
  return (
    <div className="Todo">
      <p>{todo}</p>
      <div className="action">
        <input type="checkbox" />
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
