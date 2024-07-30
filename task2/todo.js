var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sbutton = document.getElementById('sbtn');
var taskName = document.getElementById('name');
var taskDate = document.getElementById('date');
var taskDetail = document.getElementById('dtl');
var todoList = JSON.parse(localStorage.getItem('tasks') || '[]');
function addTodo() {
    var tname = taskName.value.trim();
    var tdate = taskDate.value.trim();
    var tdetail = taskDetail.value.trim();
    if (tname && tdate && tdetail) {
        var newTodo = {
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
    }
    else {
        alert('Please fill the fields correctly! Press OK to continue!');
    }
}
function displayTodoList() {
    var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    var taskList = document.getElementById('taskL');
    if (taskList) {
        taskList.innerHTML = '';
        if (tasks.length > 0) {
            tasks.forEach(function (task) {
                var cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                cardDiv.style.margin = '20px';
                cardDiv.style.background = 'linear-gradient(to right, #000000, #024c79)';
                cardDiv.style.color = 'white';
                cardDiv.style.border = '5px solid rgb(78, 92, 120)';
                var cardHeaderDiv = document.createElement('div');
                cardHeaderDiv.className = 'card-header';
                cardHeaderDiv.style.backgroundColor = '#024c79';
                cardHeaderDiv.innerText = task.name;
                var cardBodyDiv = document.createElement('div');
                cardBodyDiv.className = 'card-body';
                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = task.detail;
                var cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerText = 'Due date: ' + task.date;
                var button = document.createElement('a');
                button.className = 'btn btn-danger';
                button.href = '#';
                button.innerText = 'Remove Task';
                button.addEventListener('click', function () { return removeTodo(task.name); });
                var button2 = document.createElement('a');
                button2.className = 'btn btn-warning';
                button2.href = '#';
                button2.innerText = 'Update Task';
                button2.addEventListener('click', function () { return updateTask(task.name); });
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(cardText);
                cardBodyDiv.appendChild(button);
                cardBodyDiv.appendChild(button2);
                cardDiv.appendChild(cardHeaderDiv);
                cardDiv.appendChild(cardBodyDiv);
                taskList.appendChild(cardDiv);
            });
        }
        else {
            alert('No tasks available. Add a new task!');
        }
    }
}
function updateTask(taskName) {
    var updatedTaskName = prompt('Enter updated task name:');
    var updatedTaskDetail = prompt('Enter updated task detail:');
    var updatedTaskDate = prompt('Enter updated task date:');
    if (updatedTaskName && updatedTaskDetail && updatedTaskDate) {
        todoList = todoList.map(function (todo) {
            return todo.name === taskName
                ? __assign(__assign({}, todo), { name: updatedTaskName, detail: updatedTaskDetail, date: updatedTaskDate }) : todo;
        });
        localStorage.setItem('tasks', JSON.stringify(todoList));
        alert('Task updated successfully!');
        displayTodoList();
    }
    else {
        alert('Please fill all fields correctly!');
    }
}
function removeTodo(name) {
    todoList = todoList.filter(function (todo) { return todo.name !== name; });
    localStorage.setItem('tasks', JSON.stringify(todoList));
    displayTodoList();
}
sbutton.addEventListener('click', addTodo);
displayTodoList();
