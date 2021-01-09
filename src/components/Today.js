import React from 'react'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'

export const Today = () => {
  const timezone = useSelector((state) => state.currentTimezone).split('/')
  const temp = parseInt(useSelector((state) => state.current.temp))
  const weather = useSelector((state) => state.current.weather[0].main)
  const date = useSelector((state) => state.current.dt)

  return (
    <div>
      <h1>{temp}℃</h1>
      <h2>{weather}</h2>
      <p>Today - {DateTime.fromSeconds(date).toFormat('ccc, d LLL')}</p>
      <p>{timezone[timezone.length - 1].replaceAll('_', ' ')}</p>
    </div>
  )
}
