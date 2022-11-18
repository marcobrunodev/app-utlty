import { number } from 'prop-types'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import S from './MintCountdown.style'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const MintCountdown = ({ days, hours, minutes, seconds }) => (
  <S.MintCountdown>
    <Title centerText>Wait for it!</Title>
    <Subtitle centerText>Release UTLTY minting in:</Subtitle>

    <S.Clock>
      <S.Slot>
        <S.Time>{days || '00'}</S.Time>
        <S.Caption>Days</S.Caption>
      </S.Slot>
      <S.Slot>
        <S.Time>{hours || '00'}</S.Time>
        <S.Caption>Hours</S.Caption>
      </S.Slot>
      <S.Slot>
        <S.Time>{minutes || '00'}</S.Time>
        <S.Caption>Minutes</S.Caption>
      </S.Slot>
      <S.Slot>
        <S.Time>{seconds || '00'}</S.Time>
        <S.Caption>Seconds</S.Caption>
      </S.Slot>
    </S.Clock>

    <Button as={Link} to="/mint" second>
      Go mint
    </Button>
  </S.MintCountdown>
)

MintCountdown.propTypes = {
  days: number.isRequired,
  hours: number.isRequired,
  minutes: number.isRequired,
  seconds: number.isRequired
}

export default MintCountdown
