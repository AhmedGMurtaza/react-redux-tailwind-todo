import React, { memo, useEffect, useState } from "react";

function EditTodoForm({ handleSubmit, text }) {
  const [todo, setTodo] = useState(text);

  console.log("editapp", text);

  useEffect(() => {
    setTodo(text);
  }, [text]);

  return (
    <form
      id="editform"
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

export default EditTodoForm;
