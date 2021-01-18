import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCities } from '../actions/actions'

export const SearchBar = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setCity(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchCity = city.replaceAll(' ', '%20')
    dispatch(searchCities(searchCity))
  }
  return (
    <div>
      <form>
        <input type='text' value={city} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}
