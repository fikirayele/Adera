const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

//create user
app.post("/users",async(req, res)=>{
  try {

   console.log(req.body);

  } catch(err){

  console.error(err.message);
  
}})
//get all user
//get a user
//update user
//delete user
app.listen(5000, ()=>{
  console.log("server has started on port 5000")
});