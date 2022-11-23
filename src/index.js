document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", addToDo)

  function addToDo(event) {
    event.preventDefault();

    const taskList = document.getElementById("tasks")
    const newTask = document.createElement("li")
    newTask.textContent = taskForm.getElementsByTagName("input")[0].value
    taskList.append(newTask)
  }
});