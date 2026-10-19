let themeBtn = document.getElementById("theme-btn");
let body = document.body;
let taskInput = document.getElementById("task-input");
let priorityOptions = document.getElementById("priority-select");
let addTaskBtn = document.getElementById("add-btn");
let taskListUl = document.getElementById("task-list");
let taskCount = document.getElementById("task-count");
let clearBtn = document.getElementById("clear-completed-btn");
let filterBtns = document.querySelectorAll(".filter-btn");

// 1. Theme toggle
themeBtn.addEventListener("click", function () {
  let isDark = body.classList.toggle("dark-mode");
  themeBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// 2. Helper to update task counter
function updateCount() {
  let activeTasks = document.querySelectorAll(".task-item:not(.completed)");
  taskCount.innerText = `${activeTasks.length} tasks left`;
}

// 3. Add task
addTaskBtn.addEventListener("click", function () {
  let userInput = taskInput.value.trim();
  let priorityVal = priorityOptions.value;

  if (userInput === "") return;

  let newLi = document.createElement("li");
  newLi.className = "task-item";
  newLi.dataset.priority = priorityVal;

  let taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.innerText = userInput;
  taskSpan.addEventListener("click", function () {
    newLi.classList.toggle("completed");
    updateCount();
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "✕";
  deleteBtn.addEventListener("click", function () {
    newLi.remove();
    updateCount();
  });

  newLi.appendChild(taskSpan);
  newLi.appendChild(deleteBtn);
  taskListUl.appendChild(newLi);

  taskInput.value = "";
  updateCount();
});

// 4. Filtering
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    let filterType = btn.dataset.filter;
    let allTasks = document.querySelectorAll(".task-item");

    allTasks.forEach(function (item) {
      let isCompleted = item.classList.contains("completed");

      if (filterType === "all") {
        item.style.display = "flex";
      } else if (filterType === "active") {
        item.style.display = isCompleted ? "none" : "flex";
      } else if (filterType === "completed") {
        item.style.display = isCompleted ? "flex" : "none";
      }
    });
  });
});

// 5. Clear completed
clearBtn.addEventListener("click", function () {
  let completedItems = document.querySelectorAll(".task-item.completed");
  completedItems.forEach(function (item) {
    item.remove();
  });
  updateCount();
});