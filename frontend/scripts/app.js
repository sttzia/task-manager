document.addEventListener("DOMContentLoaded", loadTasks);

async function loadTasks() {
  try {
    const tasks = await fetchTasks();
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      taskList.innerHTML += `
        <div class="task">
          <div class="task-info">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
          </div>
          <div class="task-actions">
            <button onclick="editTask('${task._id}')">Edit</button>
            <button onclick="deleteTaskById('${task._id}')">Delete</button>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}

async function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (!title || !description) {
    alert("Please fill in both fields");
    return;
  }

  const addButton = document.querySelector(".task-input button");
  addButton.disabled = true;

  try {
    const newTask = await createTask({ title, description });
    console.log("Task added:", newTask);
    loadTasks();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  } catch (error) {
    console.error("Error adding task:", error);
  } finally {
    addButton.disabled = false;
  }
}

async function editTask(id) {
  const title = prompt("Enter new title:");
  const description = prompt("Enter new description:");

  if (!title || !description) {
    alert("Please fill in both fields");
    return;
  }

  try {
    const updatedTask = await updateTask(id, { title, description });
    console.log("Task updated:", updatedTask);
    loadTasks();
  } catch (error) {
    console.error("Error editing task:", error);
  }
}

async function deleteTaskById(id) {
  try {
    const deletedTask = await deleteTask(id);
    console.log("Task deleted:", deletedTask);
    loadTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}
