import React from "react";
import TodoItem from "./TodoItem";
import { FiLoader } from "react-icons/fi";

export default function ({ todos, ...props }) {
  return (
    <>
      {!todos && <FiLoader />}
      {todos.map((todo, i) => (
        <TodoItem key={i} index={i} {...props}>
          {todo.task}
        </TodoItem>
      ))}
    </>
  );
}
