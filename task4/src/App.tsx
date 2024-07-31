import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './components/type';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string, duedate: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task,
      duedate,
      completed: false,
      editing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, editing: true } : todo
        )
      );
    }
  };

  const editTodo = (id: number, task: string, duedate: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, duedate, editing: false } : todo
      )
    );
  };

  return (
    <div className='container'>
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        startEditing={startEditing} 
        editTodo={editTodo} 
      />
    </div>
    </div>
  );
};

export default App;
