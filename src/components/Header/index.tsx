import { HeaderContainer } from './styles'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <span>Discografia</span>
    </HeaderContainer>
  )
}
