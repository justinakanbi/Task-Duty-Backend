//In backend development, a model is like a blueprint for the data in your application. It defines the structure of your data and how it interacts with the database.

const mongoose = require("mongoose"); //import mongoose 

const schema = mongoose.Schema; //shortcut to access mongoose Schema class


//Defining the Schema for task based of the UI
const taskSchema = new schema({
title: String,//title of the task
description: String,//description of the task
tag: String,//tag associated with the task "urgent or important"
});


module.exports = mongoose.model("task", taskSchema);//Export the model to be used for request operations in the controller.