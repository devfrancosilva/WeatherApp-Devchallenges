import React from 'react'
import styles from 'styled-components'

const HeaderStyle = styles.div`
  display:none;
  @media (min-width: 1200px){
    display: flex;
    justify-content: flex-end;
    padding-top: 42px;
    span {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      padding: 1em;
      border-radius: 50%;
      display: inline-block;
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

  return (
    <HeaderStyle className="header">
        <span className="celcius">
          ℃
        </span>
        <span className="fahrenheit">
          ℉
        </span>
      </HeaderStyle>
  )
}

export default HeaderDetails;
