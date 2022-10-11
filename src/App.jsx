import React, { useState } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./store";

function App() {
  const { todos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(-1);

  const cancelEdit = () => {
    setEditTodoId(-1);
  };

  return (
    <div className="bg-gray-100 mt-10 p-3 w-4/6 max-w-lg m-auto">
      <h1>Todo App </h1>
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

      <div className="rounded-md border-2 border-gray-300 p-4">
        {" "}
        visibility filters
      </div>
    </div>
  );
}

export default App;
