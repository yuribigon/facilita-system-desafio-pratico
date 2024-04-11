import { Request, Response } from "express"
import { selectAllTasks } from "../db/tasks"
import { db } from "../_lib/prisma";


// export const getAllTasksController = (req: Request, res: Response) => {
//     try {
//         const allTasks = selectAllTasks();
//         const filteredTasks = allTasks.map((task)=>{
//             return {
//                 id: task.getUuid(),
//                 title: task.getTitle(),
//                 description: task.getDescription(),
//             }
//         })
//         if(!filteredTasks.length){
//             res.status(404).json({message: 'Nenhuma tarefa encontrada'})
//         }
//         res.status(200).json(filteredTasks)
//     } catch (error: any) {
//         return res.status(400).json({message: error.message})
//     }
// }

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const allTasks = await db.tasksTable.findMany();
       
        if(!allTasks.length){
            res.status(404).json({message: 'Nenhuma tarefa encontrada'})
        }
        res.status(200).json(allTasks)
    } catch (error: any) {
        return res.status(400).json({message: error.message})
    }
}