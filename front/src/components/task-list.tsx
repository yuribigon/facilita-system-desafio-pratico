import { Pencil, Trash2, X } from "lucide-react"
import { IconButton } from "../components/icon-button"
import { Table } from "../components/table/table"
import { TableHeader } from "../components/table/table-header"
import { TableData } from "../components/table/table-data"
import { TableRow } from "../components/table/table-row"
import { useEffect, useState } from "react"
import { Label } from "./form/label"
import { Input } from "./form/input"
import { FormButton } from "./form/button"
import { NavLink } from "./nav-link"

interface Task {
    id: string;
    title: string;
    description: string;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedTask, setEditedTask] = useState<Task>({ id: '', title: '', description: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8888/tasks');
                if (!response.ok) {
                    throw new Error('Erro na requisição à API');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error: any) {
                console.error('Erro:', error.message);
            }
        };
        fetchData();
    }, []);

    const deleteTask = async (taskId: string) => {
        try {
            const response = await fetch(`http://localhost:8888/tasks/${taskId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir tarefa');
            }

            console.log(`Tarefa com ID ${taskId} deletada`);

            window.location.reload();
        } catch (error: any) {
            console.error('Erro:', error.message);
        }
    };

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setEditedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };
    const saveEditedTask = async () => {
        try {
            const response = await fetch(`http://localhost:8888/tasks/${editedTask.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedTask)
            });

            if (!response.ok) {
                throw new Error('Erro ao editar tarefa');
            }

            console.log(`Tarefa com ID ${editedTask.id} editada`);
            closeModal();
            // Recarregar a página após a edição
            window.location.reload();
        } catch (error: any) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <div className="flex flex-col gap-4">

            <div className="flex w-full justify-between px-2 items-center ">
                <h1 className="text-2xl font-bold">Tarefas</h1>
                <div>
                    <FormButton className="text-emerald-300">
                        <NavLink href="/new-task">Adicionar nova tarefa</NavLink>
                        
                    </FormButton>
                </div>
            </div>

            <Table>
                <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                        <TableHeader style={{ width: 48 }} >
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" disabled />
                        </TableHeader>
                        <TableHeader>Título</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <>
                                <TableRow key={task.id}>
                                    <TableData>
                                        <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" disabled />
                                    </TableData>
                                    <TableData>{task.title}</TableData>
                                    <TableData>{task.description}</TableData>

                                    <TableData>
                                        <div className="flex gap-2">

                                            <IconButton
                                                title="Editar tarefa"
                                                transparent
                                                onClick={() => openModal(task)}
                                            >
                                                <Pencil />
                                            </IconButton>
                                            <IconButton
                                                title="Deletar tarefa"
                                                transparent
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                <Trash2 color="#b62020" />
                                            </IconButton>
                                        </div>
                                    </TableData>
                                </TableRow>
                                {isModalOpen && selectedTask?.id === task.id && (
                                    <TableRow>
                                        <TableData colSpan={4}>
                                            <div className="modal border border-white/10 rounded-lg">
                                                <div className="modal-content">
                                                    <div className="flex w-full justify-between p-2">
                                                        <h2 className="text-xl font-bold">Editar Tarefa</h2>
                                                        <IconButton className="close" onClick={closeModal}><X /></IconButton>
                                                    </div>
                                                    <Label htmlFor="title">Título:</Label>
                                                    <Input type="text" id="title" name="title" value={editedTask.title} onChange={handleEditTaskChange} />
                                                    <Label htmlFor="description">Descrição:</Label>
                                                    <Input id="description" name="description" value={editedTask.description} onChange={handleEditTaskChange} />
                                                    <FormButton onClick={saveEditedTask}>Salvar</FormButton>
                                                </div>
                                            </div>
                                        </TableData>
                                    </TableRow>
                                )}
                            </>
                        )
                    })}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <TableData colSpan={3}>
                            Mostrando {tasks.length} de {total} itens
                        </TableData>
                        <TableData textRight colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página {page} de {totalPages}</span>
                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        onClick={goToNextPage}
                                        disabled={page === totalPages}
                                    >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        onClick={goToLastPage}
                                        disabled={page === totalPages}
                                    >
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableData>
                    </tr>
                </tfoot> */}
            </Table>
            {/* {isModalOpen && (
                <div className="modal border border-white/10 rounded-lg">
                    <div className="modal-content">
                        <div className="flex w-full justify-between p-2">
                            <h2 className="text-xl font-bold">Editar Tarefa</h2>
                            <IconButton className="close" onClick={closeModal}><X /></IconButton>
                        </div>
                        <Label htmlFor="title">Título:</Label>
                        <Input type="text" id="title" name="title" value={editedTask.title} onChange={handleEditTaskChange} />
                        <Label htmlFor="description">Descrição:</Label>
                        <Input id="description" name="description" value={editedTask.description} onChange={handleEditTaskChange} />
                        <FormButton onClick={saveEditedTask}>Salvar</FormButton>
                    </div>
                </div>
            )} */}
        </div>
    )
}