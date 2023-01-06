import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };


  return (
    <ul>
      <li
        className="task"
        onClick={() => dispatch(toggleTodo(todo._id))}
        style={{
          textDecoration: todo.done ? "line-through" : "",
          color: todo.done ? "#bdc3c7" : "#34495e",
        }}
      >
        <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
          <AiOutlineDelete />
        </span>
        <span
          className="icon"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <BiEdit />
        </span>
      </li>
    </ul>
  );
};

export default Todo;
