const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create a new task
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ msg: "Please fill in both fields" });
  }
  try {
    const newTask = new Task({ title, description });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).send("Server Error");
  }
});

// Read all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server Error");
  }
});

// Update a task
router.put("/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || !description) {
    return res.status(400).json({ msg: "Please fill in both fields" });
  }
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    task.title = title;
    task.description = description;
    task.completed = completed;

    await task.save();
    res.json(task);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).send("Server Error");
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task removed" });
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
