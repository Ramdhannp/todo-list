export const loadTodos = () => {
    try {
      const serializedState = localStorage.getItem('todos');
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
      console.error('Error loading todos:', e);
      return [];
    }
  };
  
  export const saveTodos = (todos) => {
    try {
      const serializedState = JSON.stringify(todos);
      localStorage.setItem('todos', serializedState);
    } catch (e) {
      console.error('Error saving todos:', e);
    }
  };