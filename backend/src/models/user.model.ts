import mongoose, { Schema } from 'mongoose';

export interface ITask extends Document {
    Category: string;
    Title: string;
    content: string;
    deadline: Date;
    priority: string;
    checkDeadline: () => Promise<void>;  // Add checkDeadline method to the interface
}


const taskSchema = new Schema<ITask>({
    Category: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

taskSchema.methods.checkDeadline = async function () {
    const currentTime = new Date();

    // If current time is past the deadline and category is not already "Expired"
    if (currentTime > this.deadline && this.Category !== "Expired") {
        this.Category = 'Expired';  // Change category to "Expired"
        await this.save();  // Save the updated task with the new category
    }
};
export const Task = mongoose.model('Task', taskSchema);



// Category, Title,content, deadline , pirotry
