import { Container, Form, Header, ModalBody } from './styles'
import { FormEvent, useState } from 'react'
import { useStore } from '../../store'
import { MdOutlineClose } from 'react-icons/md'

export function ModalNewTrack() {
  const [numberTrack, setNumberTrack] = useState('')
  const [titleTrack, setTitleTrack] = useState('')
  const [durationTrack, setDurationTrack] = useState('')

  const { loadAlbums, addTrack, setModal, albumId } = useStore((store) => {
    return {
      addTrack: store.addTrack,
      loadAlbums: store.loadAlbums,
      setModal: store.setModalFormNewTrack,
      albumId: store.albumId,
    }
  })

  async function handleCreateNewTrack(event: FormEvent) {
    event.preventDefault()

    await addTrack(
      albumId,
      parseInt(numberTrack),
      titleTrack,
      parseInt(durationTrack),
    ).then(() => {
      loadAlbums()
      setModal(false, 0)
      setDurationTrack('')
      setNumberTrack('')
      setTitleTrack('')
    })
  }

  return (
    <Container>
      <ModalBody>
        <Header>
          <h3>Adicionar faixa</h3>
          <MdOutlineClose onClick={() => setModal(false, 0)} />
        </Header>
        <Form onSubmit={handleCreateNewTrack}>
          <input
            type="text"
            placeholder="Digite o nome da faixa"
            required
            value={titleTrack}
            onChange={(e) => setTitleTrack(e.target.value)}
          />
          <input
            type="number"
            placeholder="Digite o número da faixa"
            required
            value={numberTrack}
            min={1}
            onChange={(e) => setNumberTrack(e.target.value)}
          />
          <input
            type="number"
            placeholder="Digite a duração da faixa"
            required
            min={1}
            value={durationTrack}
            onChange={(e) => setDurationTrack(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </Form>
      </ModalBody>
    </Container>
  )
}
