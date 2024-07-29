
const sbutton = document.getElementById('sbtn')
const taskName = document.getElementById('name')
const taskDate = document.getElementById('date')
const taskDetail = document.getElementById('dtl')


function AddTask() {
    const tname = taskName.value.trim()
    const tdate = taskDate.value.trim()
    const tdetail = taskDetail.value.trim()

    if (tname) {
        CreateTask(tname, tdate, tdetail);
        
    }
    else {
        alert('please fill the feilds correctly! press ok to continue!')

    }
    
}

sbutton.addEventListener('click', AddTask)


function CreateTask(tname, tdate, tdetail) {
    const task = {
        name: tname,
        date: tdate,
        detail: tdetail
    }

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // Window.location.reload();
    alert('New Task created' )

    taskName.value = ''
    taskDate.value = ''
    taskDetail.value = ''
    

}


function LoadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    if (tasks.length > 0) {
        console.log('here');
        tasks.forEach(task => {

            // Create the main card div
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
            cardText.innerText = 'Due date -- ' + task.date;
            const button = document.createElement('a');
            button.className = 'btn btn-danger';
            button.href = '#';
            button.id = 'deleter';
            button.innerText = 'Remove Task';

            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(button);

            cardDiv.appendChild(cardHeaderDiv);
            cardDiv.appendChild(cardBodyDiv);

            document.getElementById('taskL').appendChild(cardDiv)


        })
    }
    else {
        alert('No tasks avialable Add new task!')
    }



}
//delete specific task when delete button clicked
LoadTasks()

let deleteBtn = document.getElementById('deleter')
deleteBtn.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const card = e.target.parentElement.parentElement.parentElement;
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const index = tasks.findIndex(task => task.name === card.querySelector('.card-header').innerText);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            card.remove();
        }
    }
    window.location.reload();
}

);


