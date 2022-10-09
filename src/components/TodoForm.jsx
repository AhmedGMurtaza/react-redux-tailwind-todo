import React, { useState } from "react";

export default function ({ handleSubmit }) {
  const [todo, setTodo] = useState("");

  return (
    <form
      id="newform"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(todo);
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border-4 border-gray-500 p-2 w-full rounded-md shadow-md"
      />
    </form>
  );
}
