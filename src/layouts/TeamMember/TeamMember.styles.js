import styled from 'styled-components'

const Description = styled.p`
  font-size: 2rem;
`

const Name = styled.h4`
  font-size: 3rem;
  color: var(--color-second);
`

const Avatar = styled.img`
  width: 100%;
  border-radius: var(--first-radius);
  border: 0.1rem solid var(--color-second);
`

const TeamMember = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 2rem);
  gap: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`

export default {
  TeamMember,
  Avatar,
  Name,
  Description
}
