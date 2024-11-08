import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './redux/slices/listSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo('');
    }
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border rounded w-full px-3 py-2 mr-2"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="ml-5 text-white px-3 py-2 rounded"
          >
            Save
          </button>
        </div>
        <ol className="">
          {todos.map((todo) => (
            <li key={todo.id} className="flex mb-2">
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-5"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;