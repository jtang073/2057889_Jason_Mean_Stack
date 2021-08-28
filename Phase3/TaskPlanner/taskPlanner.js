let http = require("http");
let url = require("url");
let fs = require("fs");
let allTasks = new Array();
if (fs.existsSync("tasks.json")) {
    allTasks = JSON.parse(fs.readFileSync("tasks.json").toString());
}

let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Task Planner</h2>
    <br/> <br/> <br/> <br/>
    <h2>Add Task</h2>
    <form action="addTask">
        <label>Employee ID: </label>
        <input type="text" name="eid"/><br/>
        <label>Task ID: </label>
        <input type="text" name="tid"/><br/>
        <label>Task: </label>
        <input type="text" name="task"/><br/>
        <label>Deadline: </label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
    </form>
    <br/> <br/>
    <h2>Delete Task</h2>
    <form action="deleteTask">
        <label>Task ID: </label>
        <input type="text" name="tid"/><br/>
        <input type="submit" value="Delete Task"/>
    </form>
    <br/> <br/>
    <h2>List Task</h2>
    <form action="listTask">
        <input type="submit" value="List All Task"/>
    </form>
</body>
</html> 
`

function addTask(userInput) {
    let eid = userInput.eid;
    let tid = userInput.tid;
    let task = userInput.task;
    let deadline = userInput.deadline;
    let tempString = "{\"eid\": \"" + eid + "\", \"tid\": \"" + tid + "\", \"task\": \"" + task + "\", " + "\"deadline\": \"" + deadline + "\"}";
    allTasks.push(JSON.parse(tempString));
    fs.writeFileSync("tasks.json",JSON.stringify(allTasks));
    console.log("Successfully logged: " + tempString);
}

function deleteTask(result) {
    for (let i = 0; i < allTasks.length; ++i) {
        if (allTasks[i] == result) {
            allTasks.splice(i, 1);
        }
    }
    fs.writeFileSync("tasks.json",JSON.stringify(allTasks));
}

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.pathname == "/addTask"){
            let userInput = urlInfo.query;
            let result = allTasks.find(t=>t.tid == userInput.tid);
            response.writeHead(200,{"content-type":"text/html"});
            if(result != undefined){   
                response.write("Failure: Task with ID " + userInput.tid + " already exists!");
                response.write(indexPage);
            }
            else {
                addTask(userInput);
                response.write("Task created successfully!")
                response.write(indexPage);
            }
        }
        else if(urlInfo.pathname == "/deleteTask"){
            let userInput = urlInfo.query;
            let result = allTasks.find(t=>t.tid == userInput.tid);
            response.writeHead(200,{"content-type":"text/html"});
            if(result != undefined){
                deleteTask(result);
                response.write("Task ID " + userInput.tid + " was successfully deleted!");
                response.write(indexPage);         
            }
            else {
                response.write("Task ID " + userInput.tid + " does NOT exist!");     
                response.write(indexPage); 
            }
        }
        else if(urlInfo.pathname == "/listTask"){
            response.writeHead(200,{"content-type":"text/html"});
            if (allTasks.length > 0) {
                let listPage = `
                    <table>
                        <tr>
                            <th>Emp ID</th>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Deadline</th>
                        </tr>
                    `
                allTasks.forEach(t=> {
                    listPage += `
                    <tr>
                        <th>${t.eid}</th>
                        <th>${t.tid}</th>
                        <th>${t.task}</th>
                        <th>${t.deadline}</th>
                    </tr>
                    `
                })
                listPage += `
                </table>
                `
                response.write(indexPage);
                response.write(listPage);
            }
            else {
                response.write(indexPage);
                response.write("There are no tasks!");
            }
        }
        else {
            response.write(indexPage);  
        }
    }
    response.end();
})
server.listen(9090,()=>console.log("Server running on port number 9090"))