// const todo_task =[{id: 1, name:"Learn FullStack Developemt"}, {id:2, name:"Get Good Job"}, {id:3, name:'Become an Expert'}]
const todo_task = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
todo_task.forEach(displayTask);
text += "</ul>";


function displayTask(value){
    text += "<li>" + value+ "</li>";
}

document.getElementById("list").innerHTML = text;

