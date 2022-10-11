import React, { memo, useEffect, useState } from "react";

function EditTodoForm({ handleSubmit, todo }) {
  const [text, setText] = useState(todo.task);

  useEffect(() => {
    setText(text);
  }, [text]);

  return (
    <form
      id="editform"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          ...todo,
          task: text,
        });
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-4 border-gray-500 p-2 w-full rounded-md shadow-md"
      />
    </form>
  );
}

export default EditTodoForm;
