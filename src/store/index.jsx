import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [
    {
      task: "first",
      isCompleted: false,
      id: 0,
    },
  ],
  reducers: {
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
  },
});

export const { actions, reducer } = todoSlice;
export const { addTodo, editTodo, deleteTodo } = actions;

export const store = configureStore({
  reducer: combineReducers({
    todos: reducer,
  }),
});
