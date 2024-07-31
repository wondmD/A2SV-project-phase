import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (task: string, duedate: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [duedate, setDuedate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() && duedate.trim()) {
      addTodo(task, duedate);
      setTask('');
      setDuedate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Task"
      />
      <input 
        type="date" 
        value={duedate} 
        onChange={(e) => setDuedate(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
