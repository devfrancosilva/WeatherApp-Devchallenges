import React from 'react'
import { useSelector } from 'react-redux'
import { Day } from './Day'
import styles from 'styled-components'

const WeekStyle = styles.div`
  display: grid; 
  grid-row-gap: 32px;
  grid-column-gap: 26px;
  grid-template-columns: repeat(2, 120px);
  padding-top: 3rem;
  justify-content: center;
  margin-bottom: 51px;
  @media (min-width: 768px){
    grid-template-columns: repeat(5, 120px);
    padding-top: 148px;
    margin-bottom: 72px;
  }
`

export const Week = () => {
  const week = useSelector((state) => state.week)
  return (
    <WeekStyle>
      {week.map((day) => (
        <Day
          temp={day.temp}
          date={day.dt}
          icon={day.weather[0].icon}
          key={day.dt}
        />
      ))}
    </WeekStyle>
  )
}
