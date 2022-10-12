import React from "react";
import { FcEmptyTrash, FcOk, FcCheckmark, FcCancel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../store/todoSlice";

import { FaPencilAlt } from "react-icons/fa";

export default function ({ handleDelete, enableEdit, index, editTodoId }) {
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
      className={`
      ${todos[index].isCompleted ? "line-through" : ""} ${
        editTodoId === index ? "bg-red-200" : "bg-gray-200"
      } flex justify-between items-center  rounded-lg h-full  px-2 py-4 m-1 border-b  border-gray-200`}
    >
      {todos[index].task}
      <div className="flex">
        <div className="flex">
          <span
            className="text-red-500 cursor-pointer text-lg mr-4"
            title="Delete"
            onClick={confirmDelete}
          >
            <FcEmptyTrash />
          </span>
          <span
            className="text-cyan-500 cursor-pointer text-lg mr-4"
            title="Edit"
            onClick={() => {
              enableEdit(index);
            }}
          >
            <FaPencilAlt />
          </span>
          <span
            className="text-cyan-800 cursor-pointer text-lg"
            title={`${
              todos[index].isCompleted
                ? "Toggle to Incomplete"
                : "Toggle to Complete"
            }`}
            onClick={() => {
              dispatch(toggleTodo(index));
            }}
          >
            {todos[index].isCompleted ? <FcCancel /> : <FcOk />}
          </span>
        </div>
      </div>
    </div>
  );
}
