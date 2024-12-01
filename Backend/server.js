const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware to allow Cross-Origin Requests (CORS)
app.use(cors());

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'adera',
  password: '1234',
  port: 5432,
});

// Basic route to check if the server is working
app.get("/", (req, res) => {
  res.send(`Welcome to backend on port :${PORT}`);
});

// Endpoint to fetch users from the 'users' table
app.get('/users', async (req, res) => {
  try {
    // Query the 'users' table (corrected the table name here)
    const result = await pool.query('SELECT first_name, last_name, mom_name, sex, income FROM users');
    res.json({ users: result.rows });
  } catch (err) {
    // Catch and send error in case of issues with the query
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
