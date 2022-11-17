import banner from '../../assets/images/home-banner.png'
import Banner from '../../components/Banner'
import Description from '../../components/Description'
import Line from '../../components/Line'
import Header from '../../layouts/Header'
import MintInfos from '../../layouts/MintInfos'
import mintBanner from '../../assets/images/mint-banner.png'
import working from '../../assets/images/working.png'
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
  </S.Home>
)

export default Home
