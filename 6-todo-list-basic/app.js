const addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById('toDoContainer');
let title = document.getElementById("title");
let inputText = document.getElementById('inputText')
let clearToDo = document.getElementById("clearToDo")

addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";


    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = "line-through";
    })


    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph)
    })
    clearToDo.addEventListener("click", () => {
        paragraph.remove();
    })
})
