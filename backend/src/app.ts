import express from 'express'
import taskExpiryCron from './cron/taskExpiryCron'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())


// routes import
import TaskRoutes from './routes/user.routes';
// routes delaration
app.use("/", TaskRoutes);


export { app }
