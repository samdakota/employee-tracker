const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// get all roles
router.get('/api/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows,
        });
    });
});

// add a role
router.post('/api/role', ({ body }, res) => {
    const sql = `INSERT INTO role (title, salary, department)
                VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body,
        });
    });
});

module.exports = router;