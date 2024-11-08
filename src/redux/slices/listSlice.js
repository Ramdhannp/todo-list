import { createSlice } from '@reduxjs/toolkit';
import { loadTodos, saveTodos } from '../../utils/localStorage';

const initialState = loadTodos();

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveTodos(state);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        saveTodos(state);
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveTodos(newState);
      return newState;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;