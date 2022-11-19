import { string } from 'prop-types'
import S from './Radio.styles'

const Radio = (props) => (
  <>
    <S.Radio id={props.value} {...props} />
    <S.Label htmlFor={props.value}>{props.label}</S.Label>
  </>
)

Radio.propTypes = {
  value: string.isRequired,
  label: string.isRequired
}

export default Radio
