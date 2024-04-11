import { Header } from '../components/header'
import { TaskList } from '../components/task-list'

export const Tasks = () => {
    return (
        <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
          <Header/>
          <TaskList/>
        </div>
      )
}
