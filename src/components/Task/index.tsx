import { Container } from './styles'

export function Task() {
  return (
    <Container>
      <div>
        <img src="/no-check.svg" alt="trash icon" role="button" />
        <label htmlFor="">Radio Button</label>
      </div>

      <img src="/trash.svg" alt="trash icon" role="button" />
    </Container>
  )
}
