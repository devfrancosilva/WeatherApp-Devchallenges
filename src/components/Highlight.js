import React from 'react'
import styles from 'styled-components'

const HighlightStyled = styles.div` 
  max-height: 205px;
  min-height: 159px;
  background: var(--gray);
  color: var(--light-gray);
  text-align: center;
  h1 {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    margin: 0;
    margin-bottom: 17px;
    span {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 42px;
      letter-spacing: 0em;
      text-align: left;      
    }
  }
  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 18,78px;
    padding-top: 22px;
    margin: 0;
    margin-bottom: 6px;
  }
  .text-details {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    margin-top: 0;
    margin-bottom: 25px;
    & i {
      margin-right: .8em;
      display: inline-block;
      background: rgba(255, 255, 255, 0.3);
      padding: .7em;
      border-radius: 50%;
      transform: rotate(-180deg);
    }
  }
  progress {
    -webkit-appearance: none;
  }
  .progress-bar::-webkit-progress-bar {
    background: #E7E7EB;
    border-radius: 80px;
    height: 8px;
  }
  .progress-bar::-webkit-progress-value {
    background: #FFEC65;
    border-radius: 80px;
    height: 8px;
    padding-bottom: 0;
  }
  .progress-container {
    margin-bottom: 41px;
    label {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: 0 auto;
    }
    p{
      width: 50%;
      margin: 0 auto;
      text-align: right;
      position: relative;
      top: -9px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: #A09FB1;
    }
  }
`

function Highlight({highlight, unity, value, details }) {
  
  return (
    <HighlightStyled>
      <h6>{highlight}</h6>
      <h1>{value}<span>{unity}</span></h1>
      {
        details && 
        details.type === 'icon'? 
        (<p className= 'text-details'>
          <i className="fas fa-location-arrow"></i>
          WSW
        </p>)
        : null
      }
      {
        details && 
        details.type === 'bar'? 
        (<div className='progress-container'>
          <label>
            <span>0</span>
            <span>50</span>
            <span>100</span>    
          </label>
          <progress className='progress-bar' id="file" max="100" value={`${value}`}></progress>
          <p><span> %</span></p> 
        </div>)
        : null
      }

    </HighlightStyled>
  )
}

export default Highlight;