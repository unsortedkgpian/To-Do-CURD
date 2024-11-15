import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { Task } from '../models/user.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import dbConnect from '../db/index';

const AddNewTask = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { Category, Title, content, deadline, priority } = req.body;
        console.log(req.body);
        const task = await Task.create({
            Category,
            Title,
            content,
            deadline,
            priority,
        });

        res.status(201).json(
            new ApiResponse(201, task, 'Task created successfully'),
        );
    } catch (error) {
        next(error);
    }
});


const getAllTasks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(
            new ApiResponse(200, tasks, 'All tasks fetched successfully'),
        );
    } catch (error) {
        next(error);
    }
});

const getTaskById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(
            new ApiResponse(200, task, 'Task fetched successfully'),
        );
    } catch (error) {
        next(error);
    }
});

const updateTask = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        console.log(id);
        const { Category, Title, content, deadline, priority } = req.body;
        const task = await Task.findByIdAndUpdate(id, {
            Category,
            Title,
            content,
            deadline,
            priority,
        });
        res.status(200).json(
            new ApiResponse(200, task, 'Task updated successfully'),
        );
    } catch (error) {
        next(error);
    }
});

const deleteTask = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json(
            new ApiResponse(200, task, 'Task deleted successfully'),
        );
    } catch (error) {
        next(error);
    }
});



export {
    AddNewTask,
    getAllTasks,
    getTaskById,
    deleteTask,
    updateTask,
};
