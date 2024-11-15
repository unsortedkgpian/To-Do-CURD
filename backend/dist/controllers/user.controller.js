"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.getTaskById = exports.getAllTasks = exports.AddNewTask = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const user_model_1 = require("../models/user.model");
const ApiResponse_1 = require("../utils/ApiResponse");
const AddNewTask = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Category, Title, content, deadline, priority } = req.body;
        console.log(req.body);
        const task = yield user_model_1.Task.create({
            Category,
            Title,
            content,
            deadline,
            priority,
        });
        res.status(201).json(new ApiResponse_1.ApiResponse(201, task, 'Task created successfully'));
    }
    catch (error) {
        next(error);
    }
}));
exports.AddNewTask = AddNewTask;
const getAllTasks = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield user_model_1.Task.find({});
        res.status(200).json(new ApiResponse_1.ApiResponse(200, tasks, 'All tasks fetched successfully'));
    }
    catch (error) {
        next(error);
    }
}));
exports.getAllTasks = getAllTasks;
const getTaskById = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield user_model_1.Task.findById(id);
        res.status(200).json(new ApiResponse_1.ApiResponse(200, task, 'Task fetched successfully'));
    }
    catch (error) {
        next(error);
    }
}));
exports.getTaskById = getTaskById;
const updateTask = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.body);
        console.log(id);
        const { Category, Title, content, deadline, priority } = req.body;
        const task = yield user_model_1.Task.findByIdAndUpdate(id, {
            Category,
            Title,
            content,
            deadline,
            priority,
        });
        res.status(200).json(new ApiResponse_1.ApiResponse(200, task, 'Task updated successfully'));
    }
    catch (error) {
        next(error);
    }
}));
exports.updateTask = updateTask;
const deleteTask = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield user_model_1.Task.findByIdAndDelete(id);
        res.status(200).json(new ApiResponse_1.ApiResponse(200, task, 'Task deleted successfully'));
    }
    catch (error) {
        next(error);
    }
}));
exports.deleteTask = deleteTask;
