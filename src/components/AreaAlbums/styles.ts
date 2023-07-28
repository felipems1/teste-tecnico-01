import { styled } from 'styled-components'

export const AreaAlbumsContainer = styled.main`
  width: 100%;
  padding: 25px;
`
export const AddAlbum = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: #0c0;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 20px;
  margin-right: 20px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const NotAlbums = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
