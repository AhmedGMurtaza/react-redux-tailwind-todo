import React from "react";

export default function ({
  handleDelete,
  handleEdit,
  cancelEdit,
  index,
  children,
  editTodoId,
}) {
  const confirmDelete = () => {
    let answer = confirm("Are you sure to delete this todo?");
    if (answer) {
      handleDelete(index);
    }
  };
  return (
    <div className="p-2 flex justify-between items-center bg-gradient-to-b from-green-200 to-green-300  rounded-md m-1">
      {children}
      <div>
        {editTodoId !== index && (
          <span
            className="text-red-500 cursor-pointer text-sm mr-4"
            onClick={confirmDelete}
          >
            delete
          </span>
        )}
        {editTodoId === index && (
          <span
            className="text-red-500 cursor-pointer text-sm mr-4"
            onClick={cancelEdit}
          >
            Cancel
          </span>
        )}
        {editTodoId !== index && (
          <span
            className="text-cyan-500 cursor-pointer text-sm"
            onClick={() => {
              handleEdit(index);
            }}
          >
            edit
          </span>
        )}{" "}
      </div>
    </div>
  );
}
