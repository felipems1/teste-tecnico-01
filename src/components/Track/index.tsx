import { useStore } from '../../store'
import { TrackInfo } from './styles'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface PropsTrack {
  id: number
  number: number
  title: string
  duration: number
}

export function Track({ number, title, duration, id }: PropsTrack) {
  const { deleteTrack, loadAlbums } = useStore((store) => {
    return {
      deleteTrack: store.deleteTrack,
      loadAlbums: store.loadAlbums,
    }
  })

  async function handleDeleteTrack(id: number) {
    await deleteTrack(id).then(() => {
      loadAlbums()
    })
  }

  return (
    <TrackInfo>
      <span>{number}</span>
      <span>{title}</span>
      <span>{(duration / 100).toFixed(2).replace('.', ':')}</span>
      <RiDeleteBin6Line onClick={() => handleDeleteTrack(id)} />
    </TrackInfo>
  )
}
