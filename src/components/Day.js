import React from 'react'
import { DateTime } from 'luxon'
import icons from '../helpers/icons'
import styles from 'styled-components'

export const Day = ({ temp, date, icon }) => {

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
      }
    }
  `

  const { min, max } = temp
  return (
    <DayStyle>
      <h2 className="title__h2">{DateTime.fromSeconds(date).toFormat('ccc, d LLL')}</h2>
      <img src={icons[icon]} alt='Icon Weather' />
      <p>
        <span className="min">{parseInt(max)}℃ </span>
        <span className="max">{parseInt(min)}℃</span>
      </p>
    </DayStyle>
  )
}
