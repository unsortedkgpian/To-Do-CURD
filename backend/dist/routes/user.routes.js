"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.route("/tasks").post(user_controller_1.AddNewTask);
router.route("/tasks").get(user_controller_1.getAllTasks);
router.route("/tasks/:id").get(user_controller_1.getTaskById);
router.route("/tasks/:id").put(user_controller_1.updateTask);
router.route("/tasks/:id").delete(user_controller_1.deleteTask);
exports.default = router;
