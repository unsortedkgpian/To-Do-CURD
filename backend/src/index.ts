import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env',
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {

        app.on("error", (err) => {
            console.log("Error", err);
            throw err;
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed", err);
    });
