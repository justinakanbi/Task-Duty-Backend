//A Controller in Backend is like a manager that handles the logic for specific parts of your application. It decides what should happen when a request comes in and co-ordinates between the request, your data and response.

const Task = require("../models/task");

const validateID = require("../utils/validateID");

// ====Functions to get all the tasks============
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); //Retrieve all tasks from the database
  res.status(200).json({ tasks }); // send the retrieved tasks
};

// ============Functions for creating a new task==========

const createTask = async (req, res) => {
  const { title, description, tag } = req.body; //destructuring the required fields from the request body

if (!title) {
    return res.status(400).json({message: "Please provide a title"})
}
if (!description) {
    return res.status(400).json({message: "Please provide a Description"})
}
if (!tag) {
    return res.status(400).json({message: "Choose Tag"})
}

  const task = await Task.create(req.body); //Create a new task with the request data
  res.status(201).json({ message: "Task created successfully", task }); //send a status code with a message of success
};

// ================Function for editing an existing task==========================
const editTask = async (req, res) => {
  const { id } = req.params; //get the task id from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({message: `ID: ${id} is not valid`})
}

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); //updates the task with the provided data
  res.status(200).json({ message: "Task Updated successfully" }); // send the success message if updated successfully
};

// ==============FUNCTION TO DELETE AN EXISTING TASK================
const deleteTask = async (req, res) => {
  const { id } = req.params; //get the task id from the request parameters

if (!validateID(id)) {
    return res.status(400).json({message: `ID: ${id} is not valid`})
}

  const task = await Task.findOneAndDelete({ _id: id }); //Delete the task with the special id
  res.status(200).json({ message: "Task successfully deleted" }); //send the success message if deletion successfully
};

// ==================FUNCTION TO GET EACH TASK===========================
const eachTask = async (req, res) => {
  const { id } = req.params; //get the task id from the request parameters
  if (!validateID(id)) {
    return res.status(400).json({message: `ID: ${id} is not valid`})
}

  const task = await Task.findOne({ _id: id }); //Find the task with the specified id
  res.status(200).json({ task }); // send the found task in json response
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; //Export the controller functions to be used in the router.
