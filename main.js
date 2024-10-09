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
    newTask.addEventListener("click", function () {
        if (newTask.getAttribute("class") == "completed") {
            todoCounting--;
            newTask.setAttribute("class", "")
        }
        else {
            todoCounting++;
            newTask.setAttribute("class", "completed")
        }
        todoNumber.innerText = `${todoCounting} completed `;


    });
    
    
    // Create and add delete button with function
    
    const deleteBtn = document.createElement("span");
    deleteBtn.setAttribute("class","trashCan");
    deleteBtn.innerHTML= "🗑️";
    deleteBtn.style.marginLeft = "20px";
    newItem.appendChild(deleteBtn);

    
    deleteBtn.addEventListener("click", function () {
        theList.removeChild(newItem);
    });

};









