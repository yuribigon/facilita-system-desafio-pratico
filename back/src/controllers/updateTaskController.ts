import { Request, Response } from "express";
import { tasks } from "../db/tasks";
import { db } from "../_lib/prisma";


// export const updateTaskController = (req: Request, res: Response) => {
//     try {
//         const uuidToUpdate = req.params.uuid
//         const {title, description} = req.body

//         if (!title || !description) {
//             throw new Error('Todos os parâmetros (título e descrição) são obrigatórios.');
//         }
//         const taskUpdate = tasks.findIndex((task)=> task.getUuid() === uuidToUpdate)

//         if(taskUpdate === -1){
//             res.status(404).json({message: "Não encontramos a tarefa"})
//         }

//         tasks[taskUpdate].updateTask(title, description)

//         return res.status(200).json({message: 'Tarefa atualizada com sucesso'})

//     } catch (error: any) {
//         res.status(400).json({message: error.message})
//     }
// }

export const updateTaskController = async (req: Request, res: Response) => {
    try {
        const uuidToUpdate = req.params.uuid
        const {title, description} = req.body

        if (!title || !description) {
            throw new Error('Todos os parâmetros (título e descrição) são obrigatórios.');
        }
        const updateTask = await db.tasksTable.update({
            where: {
              id: uuidToUpdate,
            },
            data: {
                title: title,
                description: description,
            },
          })

        return res.status(200).json({message: 'Tarefa atualizada com sucesso'})

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}