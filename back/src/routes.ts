import { Express } from 'express'
import { getAllTasksController } from './controllers/getAllTasksController'
import { createTaskController } from './controllers/createTaskController';
import { updateTaskController } from './controllers/updateTaskController';
import { deleteTaskController } from './controllers/deleteTaskController';

export function registerRoutes(app: Express){
    app.get('/tasks', getAllTasksController);
    app.post('/tasks', createTaskController);
    app.put('/tasks/:uuid', updateTaskController);
    app.delete('/tasks/:uuid', deleteTaskController);
}