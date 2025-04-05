const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM problems WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async (req, res) => {
    const { user_id, type, location, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO problems (user_id, type, location, description) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, type, location, description]
        );
        res.json(result.rows[0]);
    }  catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;