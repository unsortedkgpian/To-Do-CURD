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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const user_model_1 = require("../models/user.model"); // Import Task model
// Schedule the task check every day at midnight (00:00)
node_cron_1.default.schedule('0 0 * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all tasks that are still "In Progress"
        const tasks = yield user_model_1.Task.find({ Category: { $ne: "Expired" } }); // Exclude tasks already marked as "Expired"
        // Check each task for deadline expiry
        for (let task of tasks) {
            yield task.checkDeadline(); // Update category to "Expired" if deadline has passed
        }
        console.log('Checked tasks for expiry based on deadline');
    }
    catch (error) {
        console.error('Error checking tasks for expiry:', error);
    }
}));
exports.default = node_cron_1.default;
