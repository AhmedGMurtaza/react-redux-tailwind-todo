import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./store/todoSlice";
import VisibilityFilter from "./components/VisibilityFilter";
import { COMPLETED, PENDING, ALL } from "./constants";

function App() {
  const { todos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(-1);
  const [visibility, setVisibility] = useState(ALL);

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
        todos={todos}
        handleDelete={(index) => dispatch(deleteTodo(index))}
        enableEdit={(index) => {
          setEditTodoId(index);
        }}
        cancelEdit={cancelEdit}
        editTodoId={editTodoId}
        visibility={visibility}
      />

      <VisibilityFilter
        visibility={visibility}
        handleVisibility={setVisibility}
      />
    </div>
  );
}

export default App;
