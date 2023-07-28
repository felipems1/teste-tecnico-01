import { useStore } from '../../store'
import { Track } from '../Track'
import {
  AddTrack,
  AlbumContainer,
  AlbumInfo,
  DeleteAlbum,
  TrackInfo,
} from './styles'

interface PropsAlbum {
  id: number
  name: string
  year: number
  tracks: Array<{
    id: number
    number: number
    title: string
    duration: number
  }>
}

export function Album({ name, year, id, tracks }: PropsAlbum) {
  const { deleteAlbum, loadAlbums, setModal } = useStore((store) => {
    return {
      deleteAlbum: store.deleteAlbum,
      loadAlbums: store.loadAlbums,
      setModal: store.setModalFormNewTrack,
    }
  })

  async function handleDeleteAlbum(id: number) {
    await deleteAlbum(id).then(() => {
      loadAlbums()
    })
  }

  function handleNewTrack(id: number) {
    setModal(true, id)
  }

  return (
    <AlbumContainer>
      <AlbumInfo>
        <h2>
          Álbum: {name}, {year}
        </h2>
        <DeleteAlbum onClick={() => handleDeleteAlbum(id)}>
          Excluir álbum
        </DeleteAlbum>
        <AddTrack onClick={() => handleNewTrack(id)}>Adicionar faixa</AddTrack>
      </AlbumInfo>
      <TrackInfo>
        <span>N°</span>
        <span>Faixa</span>
        <span>Duração</span>
      </TrackInfo>
      {tracks.map((track) => (
        <Track
          key={track.id}
          title={track.title}
          id={track.id}
          duration={track.duration}
          number={track.number}
        />
      ))}
    </AlbumContainer>
  )
}
