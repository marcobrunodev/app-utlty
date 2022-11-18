import banner from '../../assets/images/home-banner.png'
import founder from '../../assets/images/nftPAPI_G.png'
import adivisor1 from '../../assets/images/sn00zeCat.png'
import adivisor2 from '../../assets/images/ZygfridS.png'
import Banner from '../../components/Banner'
import Description from '../../components/Description'
import Line from '../../components/Line'
import mintBanner from '../../assets/images/mint-banner.png'
import working from '../../assets/images/working.png'
import MintCountdown from '../../components/MintCountdown'
import Title from '../../components/Title'
import MintInfos from '../../layouts/MintInfos'
import Header from '../../layouts/Header'
import TeamMember from '../../layouts/TeamMember'
import Footer from '../../layouts/Footer'
import S from './Home.styles'

const Home = () => (
  <S.Home>
    <Header />
    <Banner src={banner} />
    <Description>
      It’s been more than a decade, but I remember it just like it was yesterday – we were just little kids shooting hoops on the street, all fighting for free ice cream given to the highest scorer. It was fun, we were just dumb kids enjoying life, not worrying about a damn thing.
    </Description>
    <Description>
      It all started with a few homies asking us to line up for them the whole morning, two, three – no maybe 8 hours total. They were total sneaker-heads but didn’t have time to line up for that long and they’d pay us good money
    </Description>

    <Line second center />

    <S.Data>
      <MintInfos banner={mintBanner} mint="0.035 ETH" supply="2500" />

      <MintInfos banner={working} mint="2.5 SOL" supply="4444" />
    </S.Data>

    <MintCountdown />

    <S.Team>
      <Title center>Team</Title>

      <TeamMember src={founder} name="@nftPAPI_G" description="Founder" />
      <TeamMember src={adivisor1} name="@sn00zeCat" description="Adivisor" />
      <TeamMember src={adivisor2} name="@ZygfridS" description="Adivisor" />
    </S.Team>

    <Line second center />

    <Footer />
  </S.Home>
)

export default Home
