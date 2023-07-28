import { Container, Form, Header, ModalBody } from './styles'
import { useStore } from '../../store'
import { MdOutlineClose } from 'react-icons/md'
import { useState, FormEvent } from 'react'

export function ModalNewAlbum() {
  const [album, setAlbum] = useState('')
  const [year, setYear] = useState('')

  const { loadAlbums, addAlbum, setModal } = useStore((store) => {
    return {
      addAlbum: store.addAlbum,
      loadAlbums: store.loadAlbums,
      setModal: store.setModalFormNewAlbum,
    }
  })

  async function handleCreateNewAlbum(event: FormEvent) {
    event.preventDefault()

    await addAlbum(album, year).then(() => {
      loadAlbums()
      setModal(false)
    })
  }

  return (
    <Container>
      <ModalBody>
        <Header>
          <h3>Adicionar álbum</h3>
          <MdOutlineClose onClick={() => setModal(false)} />
        </Header>
        <Form onSubmit={handleCreateNewAlbum}>
          <input
            type="text"
            id="album"
            placeholder="Digite o nome do álbum"
            required
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <input
            type="text"
            id="year"
            placeholder="Digite o ano do álbum"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </Form>
      </ModalBody>
    </Container>
  )
}
