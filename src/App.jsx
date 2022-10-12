import React, { useState } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo, toggleTodo } from "./store/todoSlice";

function App() {
  const { todos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(-1);

  const cancelEdit = () => {
    setEditTodoId(-1);
  };

  return (
    <div className="rounded-xl bg-gray-100 mt-10 p-3 w-4/6 max-w-lg m-auto">
      <h1
        className="text-center text-xl mb-2 font-bold text-gray-6
      00"
      >
        Todo App
      </h1>
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
        todos={todos}
        handleDelete={(index) => dispatch(deleteTodo(index))}
        handleEdit={(index) => {
          setEditTodoId(index);
        }}
        cancelEdit={cancelEdit}
        editTodoId={editTodoId}
      />

      <div className="rounded-md border-2 border-gray-300 p-4 flex justify-between">
        <h3>visibility filters</h3>
        <div className="text-sm text-indigo-600 ">
          <span
            className="mr-3 pointer"
            onClick={() => dispatch(toggleTodo("all"))}
          >
            All
          </span>
          <span
            className="text-green-700 pointer"
            onClick={() => dispatch(toggleTodo("completed"))}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
