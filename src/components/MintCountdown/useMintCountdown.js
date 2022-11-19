import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const calcTimeLeft = mintDay => {
  const now = dayjs.utc()
  const diff = +mintDay - +now
  let timeLeft

  if (diff > 0) {
    timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  return timeLeft
}

function useMintCountdown (mintDay) {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(mintDay))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft(mintDay))
    }, 1000)

    return () => clearTimeout(timer)
  })

  return { ...timeLeft }
}

export default useMintCountdown
