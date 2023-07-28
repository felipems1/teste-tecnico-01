import { styled } from 'styled-components'

export const AlbumContainer = styled.div`
  color: #000;
  margin-top: 20px;
`

export const AlbumInfo = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
  }
`

export const DeleteAlbum = styled.div`
  padding: 8px 15px;
  display: inline;
  border: none;
  border-radius: 20px;
  background-color: #f00;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    filter: brightness(0.9);
  }
`

export const AddTrack = styled.div`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: #0c0;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TrackInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  column-gap: 30px;
  margin-top: 20px;
`
