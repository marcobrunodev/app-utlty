import { arrayOf, shape, string, func } from 'prop-types'
import S from './Select.styles'

const Select = ({ items, name, onChange, value }) => (
  <S.Select name={name} onChange={onChange} value={value}>
    {items.map((item) => (<S.Option key={item.value} value={item.value}>{item.label}</S.Option>))}
  </S.Select>
)

Select.propTypes = {
  items: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired
  })).isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  value: string.isRequired
}

export default Select
