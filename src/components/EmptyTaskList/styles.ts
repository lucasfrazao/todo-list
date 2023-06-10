import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 15.25rem;
  border-top: 3px solid var(--gray-400);

  color: var(--gray-300);

  img {
    margin-bottom: 1rem;
  }

  p {
    font-weight: bold;
  }
`
