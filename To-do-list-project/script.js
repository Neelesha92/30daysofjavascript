// Get DOM elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompleted");

// Array to store our todos
let todos = [];

// Current filter state
let currentFilter = "all";

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
  renderTodos();
});

// Function to add a new todo
function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("Please enter a todo!");
    return;
  }

  // Create todo object
  const todo = {
    id: Date.now(), // Simple unique ID
    text: text,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // Add to array
  todos.push(todo);

  // Clear input
  todoInput.value = "";

  // Update the display
  renderTodos();
  saveTodos();
}

// Function to render todos to the screen
function renderTodos() {
  // Clear the list
  todoList.innerHTML = "";

  // Filter todos based on current filter
  let filteredTodos = todos;
  if (currentFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (currentFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  // Show empty state if no todos
  if (filteredTodos.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-state";

    let message = "";
    if (currentFilter === "all") message = "No todos yet. Add one above!";
    else if (currentFilter === "active")
      message = "No active todos. Great job!";
    else if (currentFilter === "completed") message = "No completed todos yet.";

    emptyMessage.textContent = message;
    todoList.appendChild(emptyMessage);
    return;
  }

  // Add each filtered todo to the list
  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.setAttribute("data-id", todo.id);

    li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
            <span class="todo-text ${todo.completed ? "completed" : ""}">${
      todo.text
    }</span>
            <input type="text" class="edit-input" value="${
              todo.text
            }" style="display: none;">
            <div class="todo-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

    todoList.appendChild(li);
  });

  updateCounter();
}

// Function to update the counter
function updateCounter() {
  const incomplete = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  let countText = "";
  if (currentFilter === "all") {
    countText = `${incomplete} of ${total} item${
      total !== 1 ? "s" : ""
    } remaining`;
  } else if (currentFilter === "active") {
    countText = `${incomplete} active item${incomplete !== 1 ? "s" : ""}`;
  } else if (currentFilter === "completed") {
    countText = `${completed} completed item${completed !== 1 ? "s" : ""}`;
  }

  todoCount.textContent = countText;

  // Enable/disable clear completed button
  clearCompletedBtn.disabled = completed === 0;
}

// Function to delete a todo
function deleteTodo(id) {
  if (!confirm("Are you sure you want to delete this todo?")) {
    return;
  }

  // Filter out the todo with the matching ID
  todos = todos.filter((todo) => todo.id !== id);

  // Update the display
  renderTodos();
  saveTodos();
}

// Function to toggle todo completion status
function toggleTodoComplete(id) {
  // Find the todo with the matching ID
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    // Toggle the completed status
    todo.completed = !todo.completed;

    // Update the display
    renderTodos();
    saveTodos();
  }
}

// Function to set filter
function setFilter(filter) {
  currentFilter = filter;

  // Update active button
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    }
  });

  renderTodos();
}

// Edit functionality
function startEdit(li, id) {
  const textSpan = li.querySelector(".todo-text");
  const editInput = li.querySelector(".edit-input");
  const editBtn = li.querySelector(".edit-btn");

  // Switch to edit mode
  textSpan.style.display = "none";
  editInput.style.display = "block";
  editInput.focus();
  editInput.select();

  editBtn.textContent = "Save";
  editBtn.classList.add("save-btn");

  // Save on Enter key
  const handleKeypress = function (e) {
    if (e.key === "Enter") {
      finishEdit(li, id);
    }
    if (e.key === "Escape") {
      cancelEdit(li);
    }
  };

  // Save on blur (when clicking away)
  const handleBlur = function () {
    finishEdit(li, id);
  };

  editInput.addEventListener("keypress", handleKeypress);
  editInput.addEventListener("blur", handleBlur);

  // Store references for cleanup
  li._editHandlers = { handleKeypress, handleBlur };
}

function finishEdit(li, id) {
  const editInput = li.querySelector(".edit-input");
  const textSpan = li.querySelector(".todo-text");
  const editBtn = li.querySelector(".edit-btn");
  const newText = editInput.value.trim();

  // Clean up event listeners
  if (li._editHandlers) {
    editInput.removeEventListener("keypress", li._editHandlers.handleKeypress);
    editInput.removeEventListener("blur", li._editHandlers.handleBlur);
    delete li._editHandlers;
  }

  if (newText) {
    // Update the todo
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = newText;
      textSpan.textContent = newText;
      saveTodos();
    }
  }

  // Switch back to view mode
  textSpan.style.display = "block";
  editInput.style.display = "none";
  editBtn.textContent = "Edit";
  editBtn.classList.remove("save-btn");
}

function cancelEdit(li) {
  const editInput = li.querySelector(".edit-input");
  const textSpan = li.querySelector(".todo-text");
  const editBtn = li.querySelector(".edit-btn");

  // Clean up event listeners
  if (li._editHandlers) {
    editInput.removeEventListener("keypress", li._editHandlers.handleKeypress);
    editInput.removeEventListener("blur", li._editHandlers.handleBlur);
    delete li._editHandlers;
  }

  // Switch back to view mode
  textSpan.style.display = "block";
  editInput.style.display = "none";
  editBtn.textContent = "Edit";
  editBtn.classList.remove("save-btn");
}

// Clear completed function
function clearCompleted() {
  const completedCount = todos.filter((todo) => todo.completed).length;

  if (completedCount === 0) return;

  if (
    !confirm(
      `Are you sure you want to delete ${completedCount} completed item${
        completedCount !== 1 ? "s" : ""
      }?`
    )
  ) {
    return;
  }

  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
  saveTodos();
}

// Local Storage functions
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
  }
}

// Event listeners
addBtn.addEventListener("click", addTodo);

// Add todo when pressing Enter key
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    setFilter(this.dataset.filter);
  });
});

// Clear completed button
clearCompletedBtn.addEventListener("click", clearCompleted);

// Event delegation for handling checkbox clicks, delete buttons, and edit buttons
todoList.addEventListener("click", function (e) {
  const li = e.target.closest(".todo-item");
  if (!li) return;

  const id = Number(li.getAttribute("data-id"));

  if (e.target.classList.contains("delete-btn")) {
    deleteTodo(id);
    return;
  }

  if (e.target.type === "checkbox") {
    toggleTodoComplete(id);
    return;
  }

  if (e.target.classList.contains("edit-btn")) {
    startEdit(li, id);
    return;
  }

  if (e.target.classList.contains("save-btn")) {
    finishEdit(li, id);
    return;
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl + A to focus on input (but not when already in input)
  if (e.ctrlKey && e.key === "a" && document.activeElement !== todoInput) {
    e.preventDefault();
    todoInput.focus();
  }

  // Escape to clear input when focused
  if (e.key === "Escape" && document.activeElement === todoInput) {
    todoInput.value = "";
    todoInput.blur();
  }
});

// Focus the input on page load
window.addEventListener("load", function () {
  todoInput.focus();
});
