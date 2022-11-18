import { string } from 'prop-types'
import S from './TeamMember.styles'

const TeamMember = ({ name, description, src }) => (
  <S.TeamMember>
    <S.Avatar src={src} />
    <S.Name>{name}</S.Name>
    <S.Description>{description}</S.Description>
  </S.TeamMember>
)

TeamMember.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  src: string.isRequired
}

export default TeamMember
