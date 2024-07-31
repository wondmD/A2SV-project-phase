
# Todo List Application

This is a simple Todo List application built with React and TypeScript. It allows users to add, edit, delete, and mark tasks as completed, with the additional feature of setting a due date for each task.

## Features

- Add tasks with a due date
- Edit tasks and their due dates
- Delete tasks
- Simple and intuitive user interface

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/your_username/Todo-app-with-JS.git
   ```

2. Navigate to the project directory

   ```sh
   cd Todo-app-with-JS/task4
   ```

3. Install the dependencies

   ```sh
   npm install
   ```

### Running the Application

1. Start the development server

   ```sh
   npm run dev
   ```

2. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Usage

- **Add a Task**: Enter the task description and due date in the input fields and click the "Add Todo" button.
- **Edit a Task**: Click the "Edit" button next to the task, modify the task description and/or due date, and click "Save".
- **Delete a Task**: Click the "Delete" button next to the task.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── AddTodo.tsx
│   │   ├── TodoList.tsx
│   │   └── ...
│   ├── types
│   │   └── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.css
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS**: For styling the application.


