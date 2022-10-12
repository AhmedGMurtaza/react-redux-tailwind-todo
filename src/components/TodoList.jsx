import React from "react";
import TodoItem from "./TodoItem";
import { FiAlertCircle } from "react-icons/fi";
import { COMPLETED, PENDING, ALL } from "../constants";

export default function ({ todos, visibility, ...props }) {
  const filteredTodos = todos
    .filter((todo) => {
      if (visibility === COMPLETED) {
        return todo.isCompleted;
      } else if (visibility === PENDING) {
        return !todo.isCompleted;
      }
      return todo;
    })

    .map((todo) => {
      return <TodoItem key={todo.i} index={todo.id} {...props} />;
    });

  return (
    <div>
      {!filteredTodos.length && (
        <div className=" text-md py-8 text-red-500 flex justify-center items-center">
          <FiAlertCircle className="mr-1" /> No todo items
        </div>
      )}
      {!!filteredTodos.length && filteredTodos}
    </div>
  );
}
