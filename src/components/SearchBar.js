import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCities, setCurrentSearch } from '../actions/actions'
import styles from 'styled-components'

const SearchStyle = styles.form`
  display: flex;
  justify-content: center;
  margin-top: 1.9em;
  margin-bottom: 38px;
  label {
    height: 48px;
    width: 252px;
    border: 1px solid #E7E7EB;
    background: transparent;
    display:flex;
    align-items: center;
    span {
      color: #616475;
      margin: 0 1em;
    }
    input {
      border: none;
      background: transparent;
      color: #E7E7EB;
      width: 100%;
      margin-right: 1em;
      outline: none;
    }
  }
  button {
    width: 86px;
    background: #3C47E9;
    color: #E7E7EB;
    border: none;
    margin-left: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`

export const SearchBar = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e) => {
    setCity(e.target.value)
    if (e.target.value.length >= 3) setDisabled(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (city.trim().length === 0) {
      setDisabled(true)
    } else {
      dispatch(setCurrentSearch(city))
      const searchCity = city.replaceAll(' ', '%20')
      dispatch(searchCities(searchCity))
      clearSearch()
    }
  }

  const clearSearch = () => setCity('')

  return (
    <>
      <SearchStyle>
        <label>
          <span className='material-icons'>search</span>
          <input
            type='text'
            value={city}
            onChange={handleChange}
            placeholder='search location'
          />
        </label>
        <button onClick={handleSubmit} disabled={disabled}>
          Search
        </button>
      </SearchStyle>
    </>
  )
}
