// The JS Code right here


// Variables
const input1 = document.querySelector("#input1");
const addBtn = document.querySelector("#addBtn");
const infoText = document.querySelector("#infoText");
const theWarner = document.querySelector("#theWarner");
const theList = document.querySelector("#theList");
const todoNumber = document.querySelector("#todoNumber");
const theArray = [];
let todoCounting = 0;


//add listener to the button
addBtn.addEventListener("click", addTasks);



// The functions
function addTasks() {

    let content = input1.value;
   
    //Check the content of the input
    if (content.length == 0) {
        theWarner.innerHTML = "Please enter a task!";
        theWarner.style.color = "red";
        return;
    }
    theWarner.innerText = "";

    //Creating new tasks to our list
    const newItem = document.createElement("li");
    theList.appendChild(newItem);

    const newTask = document.createElement("span");
    newTask.innerText = content;
    newItem.appendChild(newTask);



    //save data in array
    theArray.push(content);
    input1.value = "";

    // Add click listener to the task
    newTask.addEventListener("click",function () {
        if (newItem.getAttribute("class") == "completed") {
            todoCounting--;
            newItem.setAttribute("class", "")
        }
        else {
            todoCounting++;
            newItem.setAttribute("class", "completed")
        }
        todoNumber.innerText= `${todoCounting} completed `;
        

    });
};










