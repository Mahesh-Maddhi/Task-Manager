
let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [];
let eid = 0;

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = "eId" + todo.eid;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + todo.eid;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", inputElement.id);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick = function () {
        todoItemsContainer.removeChild(todoElement);
    };
    inputElement.onclick = function () {
        labelElement.classList.toggle("checked");
    };

}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function add() {

    let todoUserInput = document.getElementById("todoUserInput");
    if (todoUserInput.value === "") {
        alert("Enter Valid Input");
        return;
    }
    let text = todoUserInput.value;
    eid++;
    let obj = { "text": text, "eid": eid };
    todoList.push(obj);
    todoUserInput.value = "";
    createAndAppendTodo(obj);
}

