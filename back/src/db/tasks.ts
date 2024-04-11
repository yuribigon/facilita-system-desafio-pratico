import { Pool } from 'pg';
import { Task } from "../models/task";

export let tasks: Task[] = [];

export const selectAllTasks = () => tasks;

export const deleteTaskByUuid = (uuidToRemove: string) => {
const tasksUpdated = tasks.filter((task) => task.getUuid() !== uuidToRemove);
  if (tasks.length === tasksUpdated.length) {
    throw new Error("Tarefa não encontrada.");
  } else {
    tasks = tasksUpdated;
  }
};


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false // Se o banco de dados usa SSL, pode ser necessário definir isso como true em produção
//   }
// });


// export const query = async (text: any, params: any) => {
//   const start = Date.now();
//   const client = await pool.connect();
//   try {
//     const res = await client.query(text, params);
//     const duration = Date.now() - start;
//     console.log('Executou a query:', { text, duration, rows: res.rowCount });
//     return res;
//   } finally {
//     client.release();
//   }
// };

// module.exports = {
//   query
// };

// export const selectAllTasks = async () => {
//   const result = await query('SELECT * FROM tasks', []);
//   return result.rows;
// };

// export const deleteTaskByUuid = async (taskId: string) => {
//   await query('DELETE FROM tasks WHERE id = $1', [taskId]);
// };