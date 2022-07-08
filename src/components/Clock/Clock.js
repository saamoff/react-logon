import React from 'react'
import { ClockWrapper } from './Clock.styled'

const Clock = () => {

  const [time, setTime] = React.useState(new Date().toLocaleTimeString())
  const [date, setDate] = React.useState(new Date().toLocaleDateString())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      setDate(new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ClockWrapper>
      <h1>{time}</h1>
      <p>{date}</p>
    </ClockWrapper>
  )
}

export default Clock