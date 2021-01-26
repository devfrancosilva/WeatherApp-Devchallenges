import React from 'react'
import { useSelector } from 'react-redux'
import styles from 'styled-components'
import Loader from 'react-loader-spinner'
import ShowCities from './ShowCities'

const SearchResults = styles.div`
  color: #E7E7EB;
  width: 351px;
  margin: auto;
  h3 {
    font-size: 1.7em;
    font-weight: 500;
    margin-bottom: .7em;
  }
  p {
    margin-bottom: .5em;
    font-size: 1.1em;
    line-height: 1.6;
  }
`

const LoaderContainer = styles.div`
  display: flex;
  justify-content: center;
`

export const ListCities = () => {
  const { cities, currentSearch, loadingSearch } = useSelector((state) => state)

  if (loadingSearch) {
    return (<LoaderContainer>
        <Loader type='TailSpin' height={100} width={100} color='#E7E7EB'/>
      </LoaderContainer>
    )
  }

  if(currentSearch.length === 0){
    const lastSearches = JSON.parse(localStorage.getItem('lastSearches'));
    
    return (
    <ShowCities
     cities = {lastSearches}
    />
    )
  }

  return (
    <>
      {
        !cities[0] && currentSearch.length !== 0
        ? <SearchResults>
        <h3>¡Perdón!</h3>
        <p> No pudimos encontrar ningun lugar que coincida con 
          <strong>'{currentSearch}'</strong>
        </p>
        </SearchResults>
        : 
          <SearchResults>
          {currentSearch.length !== 0 && <h3>Resultados para: <em>{currentSearch}</em> ({cities.length})</h3>}
          <ShowCities
            cities = {cities}
          />
          </SearchResults>
      }
    </>
  )
}
