import { Request, Response } from "express";
import { Task } from "../models/task";
import { tasks } from "../db/tasks";
import { db } from "../_lib/prisma";
import {v4 as uuidv4} from 'uuid';

// export const createTaskController = (req: Request, res: Response) =>{
//     try {
//         const {title, description} = req.body
//         if (!title || !description) {
//             throw new Error('Todos os parâmetros (título e descrição) são obrigatórios.');
//         }

//         const newTask = new Task(title, description)

//         tasks.push(newTask)

//         res.status(200).json({ message: 'Tarefa adicionada com sucesso'})
//     } catch (error: any) {
//         res.status(400).json({ message: error.message})
//     }
// }

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error(
        "Todos os parâmetros (título e descrição) são obrigatórios."
      );
    }
    const user = await db.tasksTable.create({
      data: {
        id: uuidv4(),
        title: title,
        description: description,
      },
    });
    console.log(user);

    res.status(200).json({ message: "Tarefa adicionada com sucesso" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
