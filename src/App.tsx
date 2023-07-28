import { Container } from './AppStyles'
import { AreaAlbums } from './components/AreaAlbums'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <Container>
        <Header />
        <AreaAlbums />
      </Container>
      <GlobalStyle />
    </>
  )
}
