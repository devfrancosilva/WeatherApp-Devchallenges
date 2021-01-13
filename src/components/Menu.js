import React from 'react'
import { ListCities } from './ListCities'
import { SearchBar } from './SearchBar'

export const Menu = () => {
  return (
    <div>
      <SearchBar />
      <ListCities />
    </div>
  )
}
