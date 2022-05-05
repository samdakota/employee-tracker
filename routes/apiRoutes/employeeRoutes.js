const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// get all employees
router.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
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

// add employee
router.post('/api/employees', ({ body }, res) => {
    const sql = `INSERT INTO employees (
                first_name, 
                last_name, 
                role, 
                department, 
                salary, 
                manager
                ) VALUES (?,?,?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role, body.department, body.salary, body.manager];

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