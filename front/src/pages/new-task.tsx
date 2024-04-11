import { Header } from '../components/header'
import { TaskForm } from '../components/task-form'

export const NewTasks = () => {
    return (
        <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
          <Header/>
          <TaskForm/>
        </div>
      )
}
