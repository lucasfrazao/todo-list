import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  header.header__main {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 8rem 0;
    background-color: var(--gray-700);
  }

  form {
    width: 60%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0.8rem;

    margin-top: -1.6rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;
  margin-top: 4rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-size: 0.875rem;
  }

  header div {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.5rem;
  }

  header span:first-child {
    font-weight: bold;
    color: var(--blue);
  }

  header span:last-child {
    color: var(--gray-200);
    background-color: var(--gray-400);
    padding: 0 0.5rem;

    border-radius: 50%;
  }

  header .completed span:first-child {
    color: var(--purple);
  }

  header .completed span:last-child {
    border-radius: 0.5rem;
  }
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`
