import React, { useState } from "react";

export default function ({ handleSubmit }) {
  const [task, setTask] = useState("");

  return (
    <form
      id="newform"
      onSubmit={(e) => {
        e.preventDefault();
        if (!!task.length) {
          handleSubmit(task);
        }
      }}
    >
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-4 border-gray-500 p-2 w-full rounded-md shadow-md mb-2"
      />
    </form>
  );
}
