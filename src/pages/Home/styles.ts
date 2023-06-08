import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 8rem 0;
    background-color: var(--gray-700);
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0.8rem;

    margin-top: -1.6rem;
  }
`
