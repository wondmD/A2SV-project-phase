interface TodoItem {
  name: string;
  detail: string;
  date: string;
}

const sbutton = document.getElementById('sbtn') as HTMLButtonElement
const taskName = document.getElementById('name') as HTMLInputElement
const taskDate = document.getElementById('date') as HTMLInputElement
const taskDetail = document.getElementById('dtl') as HTMLTextAreaElement
const updaterbtn = document.getElementById('btn-warning') as HTMLButtonElement

let todoList : TodoItem[] = []
function addTodo(): void {
  const tname = taskName.value.trim()
  const tdate = taskDate.value.trim()
  const tdetail = taskDetail.value.trim()

  if (tname && tdate && tdetail) {
      const newTodo: TodoItem= {
          name: tname,
          detail: tdetail,
          date: tdate,
      };
      let tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
      tasks.push(newTodo)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      console.log(todoList);
      // alert('New Task created' )

      taskName.value = ''
      taskDate.value = ''
      taskDetail.value = ''
      
  }
  else {
      alert('please fill the feilds correctly! press ok to continue!')

  }

}
  
  function displayTodoList() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    if (tasks.length > 0) {
        console.log('here');
        tasks.forEach(task => {

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
            cardText.innerText = 'Due dae' + task.date;
            const button = document.createElement('a');
            button.className = 'btn btn-danger';
            button.href = '#';
            button.id = 'deleter';
            button.innerText = 'Remove Task';

            const button2 = document.createElement('a');
            button2.className = 'btn btn-warning' + task.name;
            button2.href = '#';
            button2.id = 'updater';
            button2.innerText = 'Update Task';

            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(button);
            cardBodyDiv.appendChild(button2);

            cardDiv.appendChild(cardHeaderDiv);
            cardDiv.appendChild(cardBodyDiv);

            const taskList = document.getElementById('taskL') as HTMLDivElement;
            if (taskList) {
                taskList.appendChild(cardDiv);
            }

        })
    }
    else {
        alert('No tasks avialable Add new task!')
    }



}
  function updateTodo(): void {
    alert('sure to update')
  }


  function update(): void {
    alert('are you sure to update this')
  }



  
  function removeTodo(name: string): void {
    todoList = todoList.filter(todo => todo.name !== name);
  }

// Assume you have a button element with the id 'myButton'


if (updaterbtn) {
  // Get the class name(s) of the button element
  const classNames = updaterbtn.className;
  console.log(classNames);
} else {
  console.log('Button element not found');
}


updaterbtn.addEventListener('click', updateTodo)
sbutton.addEventListener('click', addTodo)
displayTodoList()




















//   var readline = require('readline');
//   var rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//   });

    
// //ask user for option 
// //option 1 list tasks if not print 'there is no task'
// //option 2 remove task with a given name
// //option 3 add new task
// //option 4 exit

// async function main() {
//     var flag = 1;
    
//     while (flag == 1){
//         console.log("Choose an option:");
//         console.log("1. List tasks");
//         console.log("2. Remove task");
//         console.log("3. Add new task");
//         console.log("4. Update task");
//         console.log("5. Exit");
//         // let option = -1;
//         let val = await getInput("Enter your selection here :")
//         // rl.close()
//         console.log(val);
//         if (val == 1) {
        
//                 if (todoList.length === 0) {
//                     console.log();
//                     console.log("There is no task.");
//                     console.log('_________________');
//                     console.log();
//                 }
//                 else {
//                     displayTodoList();
//                 }
//             }else if(val == 2){
            
//                 var removeName:any = await getInput("Enter the name of the task to remove:");
//                 if (!removeName) {
//                     console.log("No input provided.");
                
//                 }
//                 else {
//                     removeTodo(removeName);
                
//                 }
//             }else if(val == 3){
        
//                 var addName = await getInput("Enter task name: ");;
            
//                 var addDetail = await getInput("Enter task detail: ");
                
            
//                 if (!addName || !addDetail) {
//                     console.log("No input provided.");
                
//                 }
//                 else {
//                     addTodo(addName, addDetail);
                    
//                 }
//             }else if(val == 4){

//                 var updateName  = await getInput("Enter the name of the task to update:");
//                 var updateDetail = await getInput("Enter new task detail:");

//                 if (!updateName || !updateDetail) {
//                     console.log("No input provided.");
                
//                 }else{
//                   updateTodo(updateName, updateDetail);
//                   console.log("Updated successfully");
//                   displayTodoList();
//                 }
//             }
            
//             else if(val == 5){
            
//                 console.log("Exiting...");
//                 flag = 0;
//             }else{
        
//                 // console.log(val, 'sdnskj')
//                 console.log("Invalid option. Please try again.");
//         }
//     }
//     rl.close()
// }

// function getInput(question: any) {
//     return new Promise((resolve) => {
//       rl.question(question, (answer:any) => {
//         resolve(answer);
//       });
//     });
//   }
  
  

// main()