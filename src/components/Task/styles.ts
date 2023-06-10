import styled from 'styled-components'

type TaskProps = {
  isCompleted: boolean
}

export const Container = styled.div<TaskProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--gray-400);
  background-color: var(--gray-500);

  font-size: 0.875rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    gap: 0.75rem;
  }

  img {
    cursor: pointer;
  }

  img:hover {
    filter: brightness(0.7);
  }

  span {
    text-decoration: ${({ isCompleted }) =>
      isCompleted ? 'line-through' : 'none'};

    color: ${({ isCompleted }) =>
      isCompleted ? 'var(--gray-300)' : 'var(--gray-100)'};
  }

  button {
    border: none;
    background: none;
    border-radius: 50%;
  }
`
