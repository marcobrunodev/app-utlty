import Menu from './Menu'
import useMenu from './useMenu'

export default () => {
  const { items, active, toggle } = useMenu()

  return <Menu items={items} active={active} toggle={toggle} />
}
