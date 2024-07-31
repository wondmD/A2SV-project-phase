import React, { useState } from 'react';
import { Todo } from './type';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  startEditing: (id: number) => void;
  editTodo: (id: number, task: string, duedate: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, startEditing, editTodo }) => {
  const [editTask, setEditTask] = useState<string>('');
  const [editDuedate, setEditDuedate] = useState<string>('');

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.editing ? (
            <>
              <input 
                type="text" 
                value={editTask} 
                onChange={(e) => setEditTask(e.target.value)} 
                placeholder="Edit Task"
              />
              <input 
                type="date" 
                value={editDuedate} 
                onChange={(e) => setEditDuedate(e.target.value)} 
                placeholder="Edit Due Date"
              />
              <button onClick={() => editTodo(todo.id, editTask, editDuedate)}>Save</button>
            </>
          ) : (
            <>
              <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.task}          - Due: {todo.duedate}
              </span>
              <button onClick={() => startEditing(todo.id)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
