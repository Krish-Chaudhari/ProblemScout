const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3001;
require('dotenv').config();  

// PostgreSQL setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(cors({
    origin: 'http://localhost:5180',  
  }));

app.use(express.json());  


pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Database connection error:', err);
    } else {
        console.log('Database connection successful:', res.rows[0]);
    }
});
  

app.post('/report-problem', async (req, res) => {
    try {
      console.log('Received request body:', req.body);
  
      const { user_id, description, location } = req.body;

      if (!description || !location) {
        return res.status(400).json({ error: 'Description and location are required.' });
      }
  
      const result = await insertProblemToDatabase(user_id, description, location); 
      res.status(201).json({ message: 'Problem reported successfully!' });
    } catch (error) {
      console.error('Error reporting problem:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });


async function insertProblemToDatabase(userId, description, location) {
    try {
        console.log("backend try");
      const query = 'INSERT INTO problems (user_id, description, location) VALUES ($1, $2, $3)';
      const values = [userId, description, location];
      

      const result = await pool.query(query, values);
      return result;
    } catch (error) {
      console.error('Error inserting problem:', error);
      throw error;
    }
  }

  app.get('/ping', (req, res) => {
    console.log('Received GET /ping');
    res.send('pong');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
