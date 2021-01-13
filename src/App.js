import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentCity } from './actions/actions'
import { Today } from './components/Today'
import { Week } from './components/Week'
import HighlightList from './components/HighlightList'
import styles from 'styled-components'
import Wrapper from './components/Wrapper'
import './App.css';

export const App = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCurrentCity())
  }, [dispatch])

  const Container = styles.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 459px 1fr;
  }
  `
  const DetailsStyle = styles.div`
    width: 100%;
    background: #100E1D;
    min-height: 100vh;
  `

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <Container>
      <Today />
      <DetailsStyle>
        <Wrapper>
          <Week />
          <HighlightList/>
        </Wrapper>
      </DetailsStyle>
    </Container>
  )
}
