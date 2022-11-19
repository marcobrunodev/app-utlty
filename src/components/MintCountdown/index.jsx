import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import MintCountdown from './MintCountdown'
import useMintCountdown from './useMintCountdown'

dayjs.extend(utc)

export default () => {
  const { days, hours, minutes, seconds } = useMintCountdown(dayjs.utc('2022-11-19T17:00:00'))

  return <MintCountdown days={days} hours={hours} minutes={minutes} seconds={seconds} />
}
