import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentCity } from './actions/actions'
import { Today } from './components/Today'
import { Week } from './components/Week'
import HighlightList from './components/HighlightList'
import HeaderDetails from './components/HeaderDetails'
import styles from 'styled-components'
import Wrapper from './components/Wrapper'
import './App.css'
import Loader from 'react-loader-spinner'
import { Menu } from './components/Menu'

const Container = styles.div`
@media (min-width: 1200px) {
  display: grid;
  grid-template-columns: 459px 1fr;
}
`
const DetailsStyle = styles.div`
  width: 100%;
  background: #100E1D;
  min-height: 100vh;
`

const LoaderContainer = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const App = () => {
  const dispatch = useDispatch()
  const { loading, loadingToday } = useSelector((state) => state)
  const { showMenu } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCurrentCity())
  }, [dispatch])


  if (loading) {
    return <Loader type='TailSpin' height={200} width={200} color='#100E1D' className="loader"/>
  }
  return (
    <Container>
      {showMenu ? <Menu /> : <Today />}
      <DetailsStyle>
        {
          loadingToday
          ? (<LoaderContainer>
            <Loader type='TailSpin' height={100} width={100} color='#E7E7EB'/>
          </LoaderContainer>)
          : (
          <Wrapper>
            <HeaderDetails/>
            <Week />
            <HighlightList />
          </Wrapper>
          ) 

        }
      </DetailsStyle>
    </Container>
  )
}
