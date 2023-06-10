import { FormEvent, useState } from 'react'

import { CreateButton } from 'components/CreateButton'
import { EmptyTaskList } from 'components/EmptyTaskList'
import { Input } from 'components/Input'

import { Container, Content, TaskList } from './styles'

export default function Home() {
  const [task, setTask] = useState<string>('')

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault()
    console.log('new task', task)
  }

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
          onChange={(event) => setTask(event.target.value)}
        />
        <CreateButton />
      </form>

      <Content>
        <header>
          <div className="created">
            <span>Tasks created</span>
            <span>0</span>
          </div>

          <div className="completed">
            <span>Completed</span>
            <span>0</span>
          </div>
        </header>

        <TaskList>
          <EmptyTaskList />
        </TaskList>
      </Content>
    </Container>
  )
}
