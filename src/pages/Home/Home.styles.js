import styled from 'styled-components'
import Banner from '../../components/Banner'
import Title from '../../components/Title'
import { Infos, MintInfos } from '../../layouts/MintInfos/MintInfos.styles'

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

const Team = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 5rem;

  ${Title} {
    margin-bottom: 2rem;
  }
`

const Data = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

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

const BannerSection = styled.section`
  margin-bottom: 4rem;

  & > ${Banner} {
    margin-bottom: 2rem;
  }
`

const Home = styled.main`
`

export default {
  Home,
  BannerSection,
  Data,
  Team,
  TeamMembers
}
