const express = require('express');
const { getAllTasks,
    saveTask,
    getSingleTasks,
    updateSingleTask,
    deleteTask } = require('../controller/tasksController');
const router = express.Router();

router.route('/').get(getAllTasks).post(saveTask)
router.route('/:id').get(getSingleTasks).patch(updateSingleTask).delete(deleteTask)


module.exports = router 