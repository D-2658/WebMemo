import React, {useMemo, useState} from 'react';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';
import TodoFilter from './Component/TodoFilter';
import useTodo from './hooks/useTodo';

function App() {
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo(); 
  const [filter, setFilter] = useState("all");
  const handleFilter = event =>{
    setFilter(event.target.value);
  }

  const filteredTodo = useMemo(()=>{
    switch(filter){
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      case "all":
      default:
        return todos;
    }
  });

  return (
    <div>
      <h1>Todo List</h1>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
        todos={filteredTodo} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
