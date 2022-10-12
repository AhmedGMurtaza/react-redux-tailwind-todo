import { createSlice } from "@reduxjs/toolkit";

// TODO SLICE (reducer, action creators)
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // addtodo is customized reducer
    addTodo: (state, action) => {
      state.push({
        task: action.payload.task,
        isCompleted: false,
        id: state.length,
      });
    },
    editTodo: (state, action) => {
      state[action.payload.id].task = action.payload.task;
      console.log(state);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    toggleTodo: (state, action) => {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;
    },
  },
});

const { actions } = todoSlice;
export const { addTodo, editTodo, deleteTodo, toggleTodo } = actions;

export default todoSlice;
