import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      task: "first",
      isCompleted: true,
      id: 0,
    },
  ],
  reducers: {
    // addtodo is customized reducer
    addTodo: (state, action) => {
      state.push({
        task: action.payload.task,
        isCompleted: false,
        id: state.length,
      });
      //   reducer: (state, action) => {
      //     //this payload was customized in below prepaervv
      //     state.push(action.payload);
      //   },
      //   prepare: (task) => {
      //     return {
      //       payload: {
      //         task,
      //         isCompleted: false,
      //         id: state.length,
      //       },
      //     };
      //   },
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
