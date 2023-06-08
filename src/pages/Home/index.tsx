import { FormEvent, useState } from 'react'

import { CreateButton } from 'components/CreateButton'
import { Input } from 'components/Input'
import { Container } from './styles'

export default function Home() {
  const [task, setTask] = useState<string>('')

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault()
    console.log('new task', task)
  }

  return (
    <Container>
      <header>
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
    </Container>
  )
}
