import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  span {
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    justify-content: center;

    span {
      display: none;
    }
  }
`
