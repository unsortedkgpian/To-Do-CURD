import cron from 'node-cron';
import { Task } from '../models/user.model';  // Import Task model

// Schedule the task check every day at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
    try {
        // Fetch all tasks that are still "In Progress"
        const tasks = await Task.find({ Category: { $ne: "Expired" } });  // Exclude tasks already marked as "Expired"

        // Check each task for deadline expiry
        for (let task of tasks) {
            await task.checkDeadline();  // Update category to "Expired" if deadline has passed
        }

        console.log('Checked tasks for expiry based on deadline');
    } catch (error) {
        console.error('Error checking tasks for expiry:', error);
    }
});

export default cron;
