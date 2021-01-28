import React from 'react'
import { DateTime } from 'luxon'
import icons from '../helpers/icons'
import styles from 'styled-components'
import { useSelector } from 'react-redux'

const DayStyle = styles.div`
    width: 120px;
    height: 177px;
    background-color: #1E213A;
    .title__h2 {
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;
      color: #E7E7EB;
      padding-top: 1em;
      margin-bottom: 1em;
    }
    img {
      width:50%;
      min-height: 70px;
      display: block;
      margin: 0 auto;
      margin-bottom: 1em;
      object-fit: contain;
    }
    p {
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;
      .min {
        color: #E7E7EB;
      }
      .max {
        color: #A09FB1;
        margin-left: 5px;
      }
    }
  `

export const Day = ({ temp, date, icon }) => {
  const { fahrenheit } = useSelector((state) => state)
  const { min, max } = temp
  const celsiusToFahMin = Math.round((min * 9) / 5 + 32)
  const celsiusToFahMax = Math.round((max * 9) / 5 + 32)
  return (
    <DayStyle>
      <h2 className='title__h2'>
        {DateTime.fromSeconds(date).toFormat('ccc, d LLL')}
      </h2>
      <img src={icons[icon]} alt='Icon Weather' />
      <p>
        <span className='min'>
          {fahrenheit ? `${celsiusToFahMin}℉` : `${Math.round(min)}℃`}
        </span>
        <span className='max'>
          {fahrenheit ? `${celsiusToFahMax}℉` : `${Math.round(max)}℃`}
        </span>
      </p>
    </DayStyle>
  )
}
