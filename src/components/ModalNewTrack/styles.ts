import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
  justify-content: center;
  align-items: center;
`

export const ModalBody = styled.div`
  max-width: 90vw;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 50px #000;
  padding: 20px;
  color: #000;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 25px;
    height: 22px;
    cursor: pointer;
  }
`

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 8px;
    width: 300px;
    outline: none;
    border: 1px solid #000;
    border-radius: 20px;
  }

  button {
    cursor: pointer;
    padding: 8px 50px;
    border-radius: 20px;
    background-color: #4a90e2;
    border: none;
    color: #fff;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
