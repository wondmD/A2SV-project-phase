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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var todoList = [];
function addTodo(name, detail) {
    var newTodo = {
        name: name,
        detail: detail,
        completed: false,
    };
    todoList.push(newTodo);
}
function displayTodoList() {
    console.log();
    console.log("Todo List:");
    console.log("---------------------------------------------");
    for (var _i = 0, todoList_1 = todoList; _i < todoList_1.length; _i++) {
        var todo = todoList_1[_i];
        var status_1 = todo.completed ? "Completed" : "Pending";
        console.log("- [".concat(status_1, "] ").concat(todo.name, ": ").concat(todo.detail));
        console.log("---------------------------------------------");
    }
}
//update to do list item
function updateTodo(name, newDetail) {
    todoList = todoList.map(function (todo) { return todo.name === name ? __assign(__assign({}, todo), { detail: newDetail }) : todo; });
}
function toggleTodoStatus(name) {
    todoList = todoList.map(function (todo) { return todo.name === name ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo; });
}
// ... other functions ...
function removeTodo(name) {
    todoList = todoList.filter(function (todo) { return todo.name !== name; });
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, val, removeName, addName, addDetail, updateName, updateDetail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flag = 1;
                    _a.label = 1;
                case 1:
                    if (!(flag == 1)) return [3 /*break*/, 13];
                    console.log("Choose an option:");
                    console.log("1. List tasks");
                    console.log("2. Remove task");
                    console.log("3. Add new task");
                    console.log("4. Update task");
                    console.log("5. Exit");
                    return [4 /*yield*/, getInput("Enter your selection here :")
                        // rl.close()
                    ];
                case 2:
                    val = _a.sent();
                    // rl.close()
                    console.log(val);
                    if (!(val == 1)) return [3 /*break*/, 3];
                    if (todoList.length === 0) {
                        console.log();
                        console.log("There is no task.");
                        console.log('_________________');
                        console.log();
                    }
                    else {
                        displayTodoList();
                    }
                    return [3 /*break*/, 12];
                case 3:
                    if (!(val == 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, getInput("Enter the name of the task to remove:")];
                case 4:
                    removeName = _a.sent();
                    if (!removeName) {
                        console.log("No input provided.");
                    }
                    else {
                        removeTodo(removeName);
                    }
                    return [3 /*break*/, 12];
                case 5:
                    if (!(val == 3)) return [3 /*break*/, 8];
                    return [4 /*yield*/, getInput("Enter task name: ")];
                case 6:
                    addName = _a.sent();
                    ;
                    return [4 /*yield*/, getInput("Enter task detail: ")];
                case 7:
                    addDetail = _a.sent();
                    if (!addName || !addDetail) {
                        console.log("No input provided.");
                    }
                    else {
                        addTodo(addName, addDetail);
                    }
                    return [3 /*break*/, 12];
                case 8:
                    if (!(val == 4)) return [3 /*break*/, 11];
                    return [4 /*yield*/, getInput("Enter the name of the task to update:")];
                case 9:
                    updateName = _a.sent();
                    return [4 /*yield*/, getInput("Enter new task detail:")];
                case 10:
                    updateDetail = _a.sent();
                    if (!updateName || !updateDetail) {
                        console.log("No input provided.");
                    }
                    else {
                        updateTodo(updateName, updateDetail);
                        console.log("Updated successfully");
                        displayTodoList();
                    }
                    return [3 /*break*/, 12];
                case 11:
                    if (val == 5) {
                        console.log("Exiting...");
                        flag = 0;
                    }
                    else {
                        // console.log(val, 'sdnskj')
                        console.log("Invalid option. Please try again.");
                    }
                    _a.label = 12;
                case 12: return [3 /*break*/, 1];
                case 13:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function getInput(question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
}
main();
