const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// get all departments
function getDepartments() {
    router.get('/api/departments', (req, res) => {
        const sql = `SELECT * FROM departments`;
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
};

// add department
router.post('/api/department', ({ body }, res) => {
    const sql = `INSERT INTO department (name)
                VALUE (?)`;

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