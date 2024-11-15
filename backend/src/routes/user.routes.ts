import { Router } from 'express';
import { AddNewTask, getAllTasks, getTaskById, deleteTask, updateTask } from '../controllers/user.controller';

const router = Router();

router.route("/tasks").post(AddNewTask)
router.route("/tasks").get(getAllTasks)
router.route("/tasks/:id").get(getTaskById)
router.route("/tasks/:id").put(updateTask)
router.route("/tasks/:id").delete(deleteTask)
export default router;
