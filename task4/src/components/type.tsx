export interface Todo {
    id: number;
    task: string;
    duedate: string;  // Change the type to string for storing date
    completed: boolean;
    editing: boolean;
  }
  