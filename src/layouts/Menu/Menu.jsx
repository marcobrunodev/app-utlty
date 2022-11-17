import { arrayOf, shape, string, func, bool } from 'prop-types'
import IconMenu from '../../components/IconMenu'
import S from './Menu.styles'

const Menu = ({ items, toggle, active }) => (
  <>
    <IconMenu onClick={toggle} />

    <S.Menu active={active}>
      <S.Close onClick={toggle} />

      {items.map(({ label, to }) => (<S.Item key={label} to={to}>{label}</S.Item>))}
    </S.Menu>
  </>
)

Menu.propTypes = {
  active: bool.isRequired,
  items: arrayOf(shape({
    label: string.isRequired,
    to: string.isRequired
  })),
  toggle: func.isRequired
}

export default Menu
