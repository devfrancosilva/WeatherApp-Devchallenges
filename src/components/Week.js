import React from 'react'
import { useSelector } from 'react-redux'
import { Day } from './Day'

export const Week = () => {
  const week = useSelector((state) => state.week)
  return (
    <div>
      {week.map((day) => (
        <Day
          temp={day.temp}
          date={day.dt}
          icon={day.weather[0].icon}
          key={day.dt}
        />
      ))}
    </div>
  )
}
