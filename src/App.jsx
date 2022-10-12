import React, { useState } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./store/todoSlice";
import { FiCheck } from "react-icons/fi";

const COMPLETED = "COMPLETED";
const PENDING = "PENDING";
const ALL = "ALL";

function App() {
  const { todos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(-1);
  const [visibility, setVisibility] = useState("ALL");

  const cancelEdit = () => {
    setEditTodoId(-1);
  };

  return (
    <div className="rounded-xl bg-gray-100 mt-10 p-3 w-4/6 max-w-lg m-auto">
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        Your Todo App
      </h2>

      {editTodoId >= 0 ? (
        <EditTodoForm
          handleSubmit={(newTodo) => {
            dispatch(editTodo({ id: editTodoId, task: newTodo.task }));
            // reset input box
            setEditTodoId(-1);
          }}
          todo={todos[editTodoId]}
        />
      ) : (
        <TodoForm
          handleSubmit={(task) =>
            dispatch(addTodo({ id: todos.length, task, isCompleted: false }))
          }
        />
      )}
      <TodoList
        todos={todos.filter((todo) => {
          if (visibility === COMPLETED) {
            return todo.isCompleted ? todo : null;
          } else if (visibility === PENDING) {
            return !todo.isCompleted ? todo : null;
          }
          return todo;
        })}
        handleDelete={(index) => dispatch(deleteTodo(index))}
        handleEdit={(index) => {
          setEditTodoId(index);
        }}
        cancelEdit={cancelEdit}
        editTodoId={editTodoId}
      />

      <div className="rounded-md border-2 border-gray-300 p-4 flex flex-col text-center">
        <h3 className="text-md uppercase ">Visibility filters</h3>
        <div className="text-md text-indigo-600 w-full flex justify-center space-around mt-2">
          <span
            className={`${
              visibility === ALL ? "" : "line-through"
            } mr-3 cursor-pointer`}
            onClick={() => setVisibility(ALL)}
          >
            All
          </span>
          <span
            className={`${
              visibility === PENDING ? "" : "line-through"
            } text-orange-500 mr-3 cursor-pointer`}
            onClick={() => setVisibility(PENDING)}
          >
            Pending
          </span>
          <span
            className={`${
              visibility === COMPLETED ? "" : "line-through"
            } text-green-700 mr-3 cursor-pointer  flex items-center `}
            onClick={() => setVisibility(COMPLETED)}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
