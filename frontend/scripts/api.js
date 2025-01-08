const apiBaseUrl = "http://localhost:5500/api/tasks";

async function fetchTasks() {
  const response = await fetch(apiBaseUrl);
  return response.json();
}

async function createTask(task) {
  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

async function updateTask(id, task) {
  const response = await fetch(`${apiBaseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

async function deleteTask(id) {
  const response = await fetch(`${apiBaseUrl}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  return await response.json();
}
