
const getAllTasks = (req, res) => {
    res.send('all items')
}

const saveTask = (req, res) => {
    res.json(req.body)
}

const getSingleTasks = (req, res) => {
    res.json({id:req.params.id})
}


const updateSingleTask = (req, res) => {
    res.send('Updated single task')
}


const deleteTask = (req, res) => {
    res.send('Delete task')
}


module.exports = {
    getAllTasks,
    saveTask,
    getSingleTasks,
    updateSingleTask,
    deleteTask
}