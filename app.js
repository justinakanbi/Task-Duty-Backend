require("dotenv").config(); // Load environment variables from a .env file into process.env



const express = require("express") //import express framework

const mongoose = require("mongoose");// import mongoose for mongoDB interactions 


const cors = require("cors");

const app = express(); //spin up the express framework server.

//CORS(CROSS ORIGIN RESOURCE SHARING); this is used when the frontend and backend are from different origins(domains, ports or protocol) and the backend hasn't been configured to accept request from the front end origin

app.use(cors());


const taskRouter  = require("./routes/taskRouter");// import the taskRouter for task-related routes.
const notFound = require("./middlewares/notFound");// import a middleware to handle 404 errors

app.use(express.json());// this is a middleware to pass incoming json requests from post man allowing access to the request.body


app.use("/api/task", taskRouter);//Mount the task router at /api/task, all task-related route starts with /api/task


app.use(notFound);// use the custom 404 middleware for handling unmatched route

const port =  3000; //define the 

const start = async ()=>{
   try {
    //Attempt to connect to monogoDB using mongoose
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected");
    
    //start the server and listen on the specified port
        app.listen(port, ()=>{console.log(`server is running on PORT ${port}`);
    })
   } catch (error) {
    //log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
    
   }
};
start();
 

//Mongoose is an ODM (Object Data Modeling) it is a library for mongoDB and node.js.
// MongoDB is a no SQL data

//justinakanbi22
//S3R6CHdcHLoecYwH
//mongodb+srv://justinakanbi22:S3R6CHdcHLoecYwH@cluster0.xtia3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0