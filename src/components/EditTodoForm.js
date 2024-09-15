import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, taskObject }) => {
  const [value, setValue] = useState(taskObject.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, taskObject.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
