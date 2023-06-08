import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  padding: 1rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: var(--gray-100);

  border: none;
  background-color: var(--blue-dark);
  border-radius: 0.5rem;

  transition: 0.2s;

  :hover {
    cursor: pointer;
    background-color: var(--blue);
  }
`
