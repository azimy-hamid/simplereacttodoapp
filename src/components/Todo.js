import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ taskObject, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => {
          toggleComplete(taskObject.id);
        }}
        className={`${taskObject.completed ? "completed" : ""}`}
      >
        {taskObject.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(taskObject.id)}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteTodo(taskObject.id);
          }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
