import express from 'express'
import { createTaskController } from '../controllers/createTaskController'
import { deleteTaskController } from '../controllers/deleteTaskController'
import { getAllTasksController } from '../controllers/getAllTasksController'
import { getOneTaskController } from '../controllers/getOneTaskController'
import { updateTaskController } from '../controllers/updateTaskController'
import { validationUserTasksData } from '../middlewares/validationUserTasksData'


const router = express.Router()

router.post('/todos', validationUserTasksData, createTaskController)
router.get('/todos', getAllTasksController)
router.get('/todos/:id', getOneTaskController)
router.put('/todos/:id', validationUserTasksData, updateTaskController)
router.delete('/todos/:id', deleteTaskController)

export { router }