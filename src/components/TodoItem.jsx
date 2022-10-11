import React from "react";
import { FcEmptyTrash, FcOk, FcCheckmark, FcCancel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../store";

import { FaPencilAlt } from "react-icons/fa";

export default function ({
  handleDelete,
  handleEdit,
  cancelEdit,
  index,
  editTodoId,
  children,
}) {
  const { todos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const confirmDelete = () => {
    let answer = confirm("Are you sure to delete this todo?");
    if (answer) {
      handleDelete(index);
    }
  };
  return (
    <div
      className={`${
        todos[index].isCompleted ? "line-through" : ""
      } p-2 flex justify-between items-center bg-gray-700  text-gray-100 rounded-md m-1`}
    >
      {children}
      <div className="flex">
        {editTodoId === index && (
          <span
            className="text-red-500 cursor-pointer text-lg mr-4"
            onClick={cancelEdit}
          >
            <FcCheckmark />
          </span>
        )}
        {editTodoId !== index && (
          <div className="flex">
            <span
              className="text-red-500 cursor-pointer text-lg mr-4"
              onClick={confirmDelete}
            >
              <FcEmptyTrash />
            </span>
            <span
              className="text-cyan-500 cursor-pointer text-lg mr-4"
              onClick={() => {
                handleEdit(index);
              }}
            >
              <FaPencilAlt />
            </span>
            <span
              className="text-cyan-800 cursor-pointer text-lg"
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
            >
              {todos[index].isCompleted ? <FcCancel /> : <FcOk />}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
