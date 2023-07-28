import { useStore } from '../../store'
import { Album } from '../Album'
import { SearchAlbum } from '../SearchAlbum'
import { useEffect } from 'react'
import { AddAlbum, AreaAlbumsContainer, NotAlbums } from './styles'
import { ModalNewAlbum } from '../ModalNewAlbum'
import { ModalNewTrack } from '../ModalNewTrack'

export function AreaAlbums() {
  const {
    loadAlbums,
    albums,
    showModalNewAlbum,
    setModalFormNewAlbum,
    showModalNewTrack,
  } = useStore((store) => {
    return {
      albums: store.albums,
      loadAlbums: store.loadAlbums,
      showModalNewAlbum: store.showModalNewAlbum,
      setModalFormNewAlbum: store.setModalFormNewAlbum,
      showModalNewTrack: store.showModalNewTrack,
    }
  })

  useEffect(() => {
    loadAlbums()
  }, [loadAlbums])

  return (
    <>
      {showModalNewAlbum && <ModalNewAlbum />}
      {showModalNewTrack && <ModalNewTrack />}
      <AreaAlbumsContainer>
        <SearchAlbum />
        <AddAlbum onClick={() => setModalFormNewAlbum(true)}>
          Adicionar álbum
        </AddAlbum>
        {albums ? (
          albums?.map((album) => (
            <Album
              key={album.id}
              id={album.id}
              name={album.name}
              year={album.year}
              tracks={album.tracks}
            />
          ))
        ) : (
          <NotAlbums>Nenhum álbum foi encontrado.</NotAlbums>
        )}
      </AreaAlbumsContainer>
    </>
  )
}
