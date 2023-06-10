import { useEffect, useState } from 'react'

import { Container } from './styles'

export interface TaskProps {
  description: string
  statusTask: string
}

type TaskComponentProps = {
  task: TaskProps
  onDeleteTask: (task: TaskProps) => void
}

export function Task({ task, onDeleteTask }: TaskComponentProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const [imgStatus, setImgStatus] = useState('/no-check.svg')

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  function handleStatusChange() {
    setImgStatus((state) => {
      return state === '/no-check.svg' ? '/check.svg' : '/no-check.svg'
    })

    setIsCompleted(true)
  }

  useEffect(() => {
    task.statusTask === 'completed'
      ? setImgStatus('/check.svg')
      : setImgStatus('/no-check.svg')
  }, [task.statusTask])

  return (
    <Container isCompleted={isCompleted}>
      <div>
        <img
          src={imgStatus}
          alt="status icon"
          role="button"
          onClick={handleStatusChange}
        />
        <span>{task.description}</span>
      </div>

      <button onClick={handleDeleteTask}>
        <img src="/trash.svg" alt="trash icon" />
      </button>
    </Container>
  )
}
