import { styled } from 'styled-components'

export const TrackInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  column-gap: 30px;
  margin-top: 20px;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #f00;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
