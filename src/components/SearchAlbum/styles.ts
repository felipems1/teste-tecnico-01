import { styled } from 'styled-components'

export const AlbumSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  color: #000;

  h3 {
    font-weight: 500;
  }
`

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 20px;
    outline: none;
  }

  button {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #4a90e2;
    color: #fff;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 600px) {
    gap: 10px;

    button {
      width: 40%;
    }
  }
`
