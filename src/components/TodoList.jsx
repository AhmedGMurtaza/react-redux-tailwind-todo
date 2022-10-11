import React from "react";
import TodoItem from "./TodoItem";

export default function ({ todos, ...props }) {
  return (
    <>
      {todos.map((todo, i) => (
        <TodoItem key={i} index={i} {...props}>
          {todo.task}
        </TodoItem>
      ))}
    </>
  );
}
