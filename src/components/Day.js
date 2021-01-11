import React from 'react'
import { DateTime } from 'luxon'
import icons from '../helpers/icons'

export const Day = ({ temp, date, icon }) => {
  const { min, max } = temp
  return (
    <div style={{ backgroundColor: '#1E213A' }}>
      <h2>{DateTime.fromSeconds(date).toFormat('ccc, d LLL')}</h2>
      <img src={icons[icon]} alt='Icon Weather' />
      <p>
        {parseInt(max)}℃ {parseInt(min)}℃
      </p>
    </div>
  )
}
