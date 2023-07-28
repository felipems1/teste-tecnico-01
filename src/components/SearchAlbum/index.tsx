import { useStore } from '../../store'
import { AlbumSearchContainer, Form } from './styles'
import { useState, FormEvent } from 'react'

export function SearchAlbum() {
  const [search, setSearch] = useState('')
  const [controlledButton, setControlledButton] = useState(true)

  const { searchAlbum, loadAlbums } = useStore((store) => {
    return {
      searchAlbum: store.searchAlbum,
      loadAlbums: store.loadAlbums,
    }
  })

  function handleSearch(event: FormEvent) {
    event.preventDefault()

    searchAlbum(search)
    setControlledButton(false)
  }

  function resetSearch(event: FormEvent) {
    event.preventDefault()

    loadAlbums()
    setControlledButton(true)
    setSearch('')
  }

  return (
    <AlbumSearchContainer>
      <h3>Digite uma palavra chave</h3>
      <Form>
        <input
          type="text"
          value={search}
          placeholder="Digite uma palavra chave"
          onChange={(e) => setSearch(e.target.value)}
        />
        {controlledButton ? (
          <button onClick={handleSearch}>Procurar</button>
        ) : (
          <button onClick={resetSearch}>Limpar</button>
        )}
      </Form>
    </AlbumSearchContainer>
  )
}
