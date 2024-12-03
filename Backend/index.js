require('dotenv').config();
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

   const { full_name, email, role,password}=req.body;
   const newUsers=await pool.query(
    "INSERT INTO USERS(full_name, email, role,password) VALUES($1,$2,$3,$4) RETURNING *",
    [full_name, email, role,password]
   );

   res.json(newUsers.rows[0]);

  } catch(err){

  console.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
}})
//get all user
app.get("/users",async(req,res)=>{
  try{
    const allUsers=await pool.query("SELECT * FROM users")
    res.json(allUsers.rows);

  }catch(err){
    console.error(err.message)
  }
})
//get a user
app.get("/users/:id",async(req,res)=>{
  try{
    const {id}=req.params;
    const users=await pool.query("SELECT * FROM users WHERE users_id=$1"
      ,[id]);
      res.json(users.rows[0]);

  }catch(err){
  console.error(err.message)
}
})
// Update user
app.put("/users/:id", async (req, res) => {
  try {
      const { id } = req.params; // Extract user ID from the URL parameters
      const { full_name, email, role, password } = req.body; // Get data from request body

      // Update the user; include all fields you want to update
      const updatedUser = await pool.query(
          "UPDATE users SET full_name = $1, email = $2, role = $3, password = $4 WHERE users_id = $5",
          [full_name, email, role, password, id] // Pass all parameters
      );

      res.json("User was updated!");
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete user
app.delete("/users/:id", async (req, res) => {
  try {
      const { id } = req.params; // Extract user ID from the URL parameters

      // Delete the user by ID
      const deletedUser = await pool.query(
          "DELETE FROM users WHERE users_id = $1",
          [id] // Only need the ID for deletion
      );

      res.json("User was deleted!");
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(5000, ()=>{
  console.log("server has started on port 5000")
});