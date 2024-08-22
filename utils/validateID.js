//Utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple function.

//These  tasks often include things like data validation, formatting, or other repetitive operations that are used across different parts of the application.


const mongoose = require("mongoose");//import mongoose

const validateID = (id) => {
    //Utility function to validate mongoDB objectIDs
    const isValid = mongoose.Types.ObjectId.isValid(id);//Check if the id is a validation result
    return isValid
};



module.exports = validateID;//Export the function to be used in the controller