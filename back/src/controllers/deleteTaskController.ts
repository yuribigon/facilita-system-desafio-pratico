import { Request, Response } from "express";
import { deleteTaskByUuid } from "../db/tasks";
import { db } from "../_lib/prisma";

// export const deleteTaskController = (req: Request, res: Response) => {
//     try {
//         const uuidToDelete = req.params.uuid
//         deleteTaskByUuid(uuidToDelete)
//         res.status(200).json({message: "Tarefa deletada com sucesso"})

//     } catch (error: any) {
//         res.status(400).json({message: error.message})
//     }
// }

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const uuidToDelete = req.params.uuid;
    const deleteUser = await db.tasksTable.delete({
      where: {
        id: uuidToDelete,
      },
    });
    res.status(200).json({ message: "Tarefa deletada com sucesso" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
