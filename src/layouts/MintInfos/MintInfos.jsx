import { string } from 'prop-types'
import Card from '../../components/Card'
import S from './MintInfos.styles'

const MintInfos = ({ banner, supply, mint }) => (
  <S.MintInfos>
    <Card center src={banner} />

    <S.Infos>
      <S.Info>
        <S.Label>Supply</S.Label>
        <S.Value>{supply}</S.Value>
      </S.Info>

      <S.Info>
        <S.Label>Mint</S.Label>
        <S.Value>{mint}</S.Value>
      </S.Info>
    </S.Infos>
  </S.MintInfos>
)

MintInfos.propTypes = {
  banner: string.isRequired,
  supply: string.isRequired,
  mint: string.isRequired
}

export default MintInfos
