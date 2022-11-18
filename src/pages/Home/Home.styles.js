import styled from 'styled-components'
import Banner from '../../components/Banner'
import { Infos, MintInfos } from '../../layouts/MintInfos/MintInfos.styles'

const Team = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
`

const Data = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media (min-width: 640px) {
    flex-direction: row-reverse;
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    & ${MintInfos}:first-child {
      flex-direction: column-reverse;

      & ${Infos} {
        margin-bottom: 1rem;
      }
    }
  }
`

const Home = styled.main`
  & > ${Banner} {
    margin-bottom: 2rem;
  }
`

export default {
  Home,
  Data,
  Team
}
