import React from 'react'
import styles from 'styled-components'
import Wrapper from './Wrapper'
import { useSelector } from 'react-redux'
import Wind from './Wind';
import AirPressure from './AirPressure';
import Humidity from './Humidity';
import Visibility from './Visibility';

const List = styles.div`
  display: grid;
  padding-bottom: 5em; 
  grid-row-gap: 32px;
  grid-auto-flow: row-dense;
  grid-column-gap: 48px;
  grid-template-columns: 328px;
  @media (min-width: 768px){
    grid-template-columns: repeat(2, 328px);
    grid-row-gap: 48px;
    grid-column-gap: 48px;
  }
    justify-content: center;
  `
  
  const Title = styles.h2`
    color: #E7E7EB;
    font-family: Raleway;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 32px;
    @media (min-width:770px){
      text-align: left;
    }
  `
  
  const WrapperHighlightList = styles.div`
    background: var(--dark-gray);
    padding: 1.5em 0;
  `

function HighlightList() {

  const current = useSelector((state) => state.current)
  console.log(current)

  return (
    <WrapperHighlightList>
      <Title>Today's Highlights</Title>
      <List>
        <Wind/>
        <Humidity/>
        <Visibility/>
        <AirPressure/>
      </List>
    </WrapperHighlightList>
  )
}

export default HighlightList