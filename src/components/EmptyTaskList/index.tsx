import { Container } from './styles'

export function EmptyTaskList() {
  return (
    <Container>
      <img src="/clipboard.svg" alt="clipboard icon" />
      <p>You don&apos;t have tasks registered yet</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </Container>
  )
}
