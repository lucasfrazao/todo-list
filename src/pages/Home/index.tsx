import { FormEvent, useState, useEffect } from 'react'

import { CreateButton } from 'components/CreateButton'
import { Input } from 'components/Input'

import { EmptyTaskList } from 'components/EmptyTaskList'
import { Task, TaskProps } from 'components/Task'
import { Container, Content, TaskList } from './styles'

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [totalTasksCompleted, setTotalTasksCompleted] = useState<number>(0)
  const [descriptionNewTask, setDescriptionNewTask] = useState<string>('')

  const totalTasks = tasks.length

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault()

    const newTask = {
      description: descriptionNewTask,
      statusTask: 'not-completed',
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: TaskProps) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  useEffect(() => {
    const totalCompletedTasks = tasks.filter(
      (task) => task.statusTask === 'completed',
    ).length

    console.log(totalCompletedTasks)

    setTotalTasksCompleted(totalCompletedTasks)
  }, [tasks])

  return (
    <Container>
      <header className="header__main">
        <img src="/logo.svg" alt="logo to do list" />
        asdas
      </header>

      <form onSubmit={handleNewTask}>
        <Input
          label="Add a new task"
          placeholder="Add a new task"
          type="text"
          onChange={(event) => setDescriptionNewTask(event.target.value)}
        />
        <CreateButton />
      </form>

      <Content>
        <header>
          <div className="created">
            <span>Tasks created</span>
            <span>{totalTasks}</span>
          </div>

          <div className="completed">
            <span>Completed</span>
            <span>
              {totalTasksCompleted} of {totalTasks}
            </span>
          </div>
        </header>

        <TaskList>
          {tasks.length === 0 ? (
            <EmptyTaskList />
          ) : (
            <>
              {tasks.map((task, index) => {
                return (
                  <Task key={index} task={task} onDeleteTask={deleteTask} />
                )
              })}
            </>
          )}
        </TaskList>
      </Content>
    </Container>
  )
}
