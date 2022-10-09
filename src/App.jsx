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

  console.log(todos[editTodoId]);

  return (
    <div className="bg-gray-100 mt-10 p-3 w-3/6 m-auto">
      <h1>Todo App </h1>
      {editTodoId >= 0 ? (
        <EditTodoForm
          handleSubmit={(newVal) => {
            dispatch(editTodo({ id: editTodoId, text: newVal }));
            // reset input box
            setEditTodoId(-1);
          }}
          text={todos[editTodoId]}
        />
      ) : (
        <TodoForm handleSubmit={(todo) => dispatch(addTodo(todo))} />
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
    </div>
  );
}

export default App;
