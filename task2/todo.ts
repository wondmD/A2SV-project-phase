interface TodoItem {
  name: string;
  detail: string;
  date: string;
}

const sbutton = document.getElementById('sbtn') as HTMLButtonElement;
const taskName = document.getElementById('name') as HTMLInputElement;
const taskDate = document.getElementById('date') as HTMLInputElement;
const taskDetail = document.getElementById('dtl') as HTMLTextAreaElement;

let todoList: TodoItem[] = JSON.parse(localStorage.getItem('tasks') || '[]');

function addTodo(): void {
  const tname = taskName.value.trim();
  const tdate = taskDate.value.trim();
  const tdetail = taskDetail.value.trim();

  if (tname && tdate && tdetail) {
    const newTodo: TodoItem = {
      name: tname,
      detail: tdetail,
      date: tdate,
    };
    todoList.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(todoList));

    taskName.value = '';
    taskDate.value = '';
    taskDetail.value = '';
    displayTodoList();
  } else {
    alert('Please fill the fields correctly! Press OK to continue!');
  }
}

function displayTodoList() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TodoItem[];
  const taskList = document.getElementById('taskL') as HTMLDivElement;

  if (taskList) {
    taskList.innerHTML = '';
    if (tasks.length > 0) {
      tasks.forEach((task) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.margin = '20px';
        cardDiv.style.background = 'linear-gradient(to right, #000000, #024c79)';
        cardDiv.style.color = 'white';
        cardDiv.style.border = '5px solid rgb(78, 92, 120)';

        const cardHeaderDiv = document.createElement('div');
        cardHeaderDiv.className = 'card-header';
        cardHeaderDiv.style.backgroundColor = '#024c79';
        cardHeaderDiv.innerText = task.name;

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerText = task.detail;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = 'Due date: ' + task.date;

        const button = document.createElement('a');
        button.className = 'btn btn-danger';
        button.href = '#';
        button.innerText = 'Remove Task';
        button.addEventListener('click', () => removeTodo(task.name));

        const button2 = document.createElement('a');
        button2.className = 'btn btn-warning';
        button2.href = '#';
        button2.innerText = 'Update Task';
        button2.addEventListener('click', () => updateTask(task.name));

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(button);
        cardBodyDiv.appendChild(button2);

        cardDiv.appendChild(cardHeaderDiv);
        cardDiv.appendChild(cardBodyDiv);

        taskList.appendChild(cardDiv);
      });
    } else {
      alert('No tasks available. Add a new task!');
    }
  }
}

function updateTask(taskName: string) {
  const updatedTaskName = prompt('Enter updated task name:');
  const updatedTaskDetail = prompt('Enter updated task detail:');
  const updatedTaskDate = prompt('Enter updated task date:');

  if (updatedTaskName && updatedTaskDetail && updatedTaskDate) {
    todoList = todoList.map((todo) =>
      todo.name === taskName
        ? { ...todo, name: updatedTaskName, detail: updatedTaskDetail, date: updatedTaskDate }
        : todo
    );
    localStorage.setItem('tasks', JSON.stringify(todoList));
    alert('Task updated successfully!');
    displayTodoList();
  } else {
    alert('Please fill all fields correctly!');
  }
}

function removeTodo(name: string): void {
  todoList = todoList.filter((todo) => todo.name !== name);
  localStorage.setItem('tasks', JSON.stringify(todoList));
  displayTodoList();
}

sbutton.addEventListener('click', addTodo);

displayTodoList();
