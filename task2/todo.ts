interface TodoItem {
    name: string;
    detail: string;
    completed: boolean;
  }

let todoList : TodoItem[] = []
  function addTodo(name: any, detail: any): void {
    const newTodo: TodoItem = {
      name,
      detail,
      completed: false,
    };
    todoList.push(newTodo);
  }
  
  function displayTodoList(): void {
    console.log();
    console.log("Todo List:");
    console.log("---------------------------------------------")
    for (const todo of todoList) {
      const status = todo.completed ? "Completed" : "Pending";
      console.log(`- [${status}] ${todo.name}: ${todo.detail}`);
      console.log("---------------------------------------------");
    }
  }
//update to do list item
  function updateTodo(name: any, newDetail: any): void {
    todoList = todoList.map(todo => todo.name === name? {...todo, detail: newDetail } : todo);
  }


  function toggleTodoStatus(name: string): void {
    todoList = todoList.map(todo => todo.name === name? {...todo, completed:!todo.completed } : todo);
  }


  interface TodoItem {
    name: string;
    detail: string;
    completed: boolean;
  }
  
  // ... other functions ...
  
  function removeTodo(name: string): void {
    todoList = todoList.filter(todo => todo.name !== name);
  }


  var readline = require('readline');
  var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

    
//ask user for option 
//option 1 list tasks if not print 'there is no task'
//option 2 remove task with a given name
//option 3 add new task
//option 4 exit

async function main() {
    var flag = 1;
    
    while (flag == 1){
        console.log("Choose an option:");
        console.log("1. List tasks");
        console.log("2. Remove task");
        console.log("3. Add new task");
        console.log("4. Update task");
        console.log("5. Exit");
        // let option = -1;
        let val = await getInput("Enter your selection here :")
        // rl.close()
        console.log(val);
        if (val == 1) {
        
                if (todoList.length === 0) {
                    console.log();
                    console.log("There is no task.");
                    console.log('_________________');
                    console.log();
                }
                else {
                    displayTodoList();
                }
            }else if(val == 2){
            
                var removeName:any = await getInput("Enter the name of the task to remove:");
                if (!removeName) {
                    console.log("No input provided.");
                
                }
                else {
                    removeTodo(removeName);
                
                }
            }else if(val == 3){
        
                var addName = await getInput("Enter task name: ");;
            
                var addDetail = await getInput("Enter task detail: ");
                
            
                if (!addName || !addDetail) {
                    console.log("No input provided.");
                
                }
                else {
                    addTodo(addName, addDetail);
                    
                }
            }else if(val == 4){

                var updateName  = await getInput("Enter the name of the task to update:");
                var updateDetail = await getInput("Enter new task detail:");

                if (!updateName || !updateDetail) {
                    console.log("No input provided.");
                
                }else{
                  updateTodo(updateName, updateDetail);
                  console.log("Updated successfully");
                  displayTodoList();
                }
            }
            
            else if(val == 5){
            
                console.log("Exiting...");
                flag = 0;
            }else{
        
                // console.log(val, 'sdnskj')
                console.log("Invalid option. Please try again.");
        }
    }
    rl.close()
}

function getInput(question: any) {
    return new Promise((resolve) => {
      rl.question(question, (answer:any) => {
        resolve(answer);
      });
    });
  }
  
  

main()