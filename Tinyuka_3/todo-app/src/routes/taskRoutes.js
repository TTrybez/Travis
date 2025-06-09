const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/tasks', isAuthenticated, createTask);
router.get('/tasks', isAuthenticated, getTasks);
router.put('/tasks/:id', isAuthenticated, updateTask);
router.delete('/tasks/:id', isAuthenticated, deleteTask);

module.exports = router;