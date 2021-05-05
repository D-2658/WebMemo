import React from 'react';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';
import useTodo from './hooks/useTodo';

function App() {
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo(); 

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
