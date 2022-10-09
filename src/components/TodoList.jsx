import React from "react";
import TodoItem from "./TodoItem";

export default function ({ todos, ...props }) {
  return (
    <>
      {todos.map((text, i) => (
        <TodoItem key={i} index={i} {...props}>
          {text}
        </TodoItem>
      ))}
    </>
  );
}
