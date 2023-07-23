class Todo {
    constructor(task_title, task_description, task_deadline, task_completed) {
      this._task_title = task_title;
      this._task_description = task_description;
      this._task_deadline = task_deadline;
      this._task_completed = task_completed;
    }
  
    get task_title() {
      return this._task_title;
    }
  
    get task_description() {
      return this._task_description;
    }
  
    get task_deadline() {
      return this._task_deadline;
    }
  
    get task_completed() {
      return this._task_completed;
    }
  
    set task_completed(isCompleted) {
      this._task_completed = isCompleted;
    }
  }
class Uncompleted_Todo {
    constructor(task_title, task_description, task_deadline, task_completed) {
      this._task_title = task_title;
      this._task_description = task_description;
      this._task_deadline = task_deadline;
      this._task_completed = task_completed;
    }
  
    get task_title() {
      return this._task_title;
    }
  
    get task_description() {
      return this._task_description;
    }
  
    get task_deadline() {
      return this._task_deadline;
    }
  
    get task_completed() {
      return this._task_completed;
    }
  
    set task_completed(isCompleted) {
      this._task_completed = isCompleted;
    }
  }
  
  const taskList = [];
  
  const form = document.getElementById("task-form");
  let taskListContainer = document.querySelector(".view-tasks");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task_title = document.getElementById("title").value;
    const task_description = document.getElementById("description").value;
    const task_deadline = document.getElementById("deadline").value;
    const task_completed = document.querySelector("#checkbox")

    if (task_completed){
      const newTask = new Uncompleted_Todo(task_title, task_description, task_deadline, task_completed);
      taskList.push(newTask);
    
      displayTasks();
      form.reset();

  }else if(!task_completed){
    const newTask = new Todo(task_title, task_description, task_deadline, task_completed);
    taskList.push(newTask);
  
    displayTasks();
    form.reset();
  }
  
  });
  
  function displayTasks() {
    taskListContainer.innerHTML = "";
  
    taskList.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.className = "new-task";
  
      const taskTitle = document.createElement("h3");
      taskTitle.textContent = task.task_title;

      const detail = document.createElement("div");
      detail.className = "details";
  
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.task_description;
  
      const taskDeadline = document.createElement("p");
      taskDeadline.textContent = `Deadline: ${task.task_deadline}`;
  
      const taskCompleted = document.createElement("input");
      taskCompleted.type = "checkbox";
      taskCompleted.checked = task.task_completed;
      taskCompleted.addEventListener("change", () => {
        task.task_completed = taskCompleted.checked;
        displayTasks();
      });
  
      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      editButton.addEventListener("click", () => {
        console.log("editing..")
        displayTasks();
      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.splice(index, 1);
        displayTasks();
      });
  
      taskItem.appendChild(taskTitle);
      taskItem.appendChild(taskDescription);
      taskItem.appendChild(detail)
      detail.appendChild(taskDeadline);
      detail.appendChild(taskCompleted);
      detail.appendChild(deleteButton);
      detail.appendChild(editButton);
  
      taskListContainer.appendChild(taskItem);
    });
  }
  
  displayTasks();
  

  // filter from the list now to display the different rypes of class (active completed and if completed how ealy was it completed )