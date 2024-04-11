import React, { useState } from 'react';
import { Form } from './form/form';
import { Label } from './form/label';
import { Input } from './form/input';
import { FormButton } from './form/button';

interface Task {
  title: string;
  description: string;
}

export function TaskForm() {
  const [task, setTask] = useState<Task>({
    title: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8888/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar tarefa para a API');
      }

      console.log('Tarefa enviada com sucesso!');

      // Limpar o estado após a submissão
      setTask({
        title: '',
        description: ''
      });
    } catch (error: any) {
      console.error('Erro:', error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Nova tarefa</h1>
      </div>



      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="title">Título:</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Descrição:</Label>
          <Input
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <FormButton type="submit">Adicionar Tarefa</FormButton>
      </Form>
    </div>
  );
};