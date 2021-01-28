import React from 'react'
import { useDispatch } from 'react-redux'
import styles from 'styled-components'
import { setCelsius, setFahrenheit } from '../actions/actions'

const HeaderStyle = styles.div`
  display:none;
  @media (min-width: 1200px){
    display: flex;
    justify-content: flex-end;
    padding-top: 42px;
    button {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      padding: 1em;
      border: none;
      border-radius: 50%;
      display: inline-block;
      &:hover {
        cursor: pointer;
      }
    }
    .celcius {
      background: #E7E7EB;
      color: #110E3C;
      margin-right: 12px;
    }
    .fahrenheit {
      background: #585676;
      color: #E7E7EB;
    }
  }
  `

const HeaderDetails = () => {
  const dispatch = useDispatch()
  const handleFahrenheit = () => {
    dispatch(setFahrenheit())
  }
  const handleCelsius = () => {
    dispatch(setCelsius())
  }
  return (
    <HeaderStyle className='header'>
      <button className='celcius' onClick={handleCelsius}>
        ℃
      </button>
      <button className='fahrenheit' onClick={handleFahrenheit}>
        ℉
      </button>
    </HeaderStyle>
  )
}

export default HeaderDetails
