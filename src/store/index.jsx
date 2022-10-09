import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: ["first"],
  reducers: {
    addTodo: (state, action) => {
      console.log("ADD TODO IS CALLED");
      console.log(action);
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const newState = [...state];
      newState[action.payload.id] = action.payload.text;
      return newState;
    },
    deleteTodo: (state, action) => {
      console.log("DELETE TODO IS CALLED");
      return state.filter((todo, i) => {
        return i !== action.payload;
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
