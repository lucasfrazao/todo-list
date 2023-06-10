import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.875rem;

  background-color: var(--gray-500);

  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;

  input {
    width: 100%;
    border: none;
    background: none;

    color: var(--gray-300);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: 'Inter', sans-serif;
  }

  :focus-within {
    outline: 2px solid var(--purple-dark);
  }
`
