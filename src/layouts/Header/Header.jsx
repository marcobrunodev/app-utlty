import Logo from '../../components/Logo'
import Menu from '../Menu'
import S from './Header.styles'

const Header = () => (
  <S.Header>
    <Logo />

    <Menu items={[{ label: 'Mint', to: '/mint' }]} />
  </S.Header>
)

export default Header
