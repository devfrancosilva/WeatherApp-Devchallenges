import React from 'react'
import { useDispatch } from 'react-redux'
import { showMenu } from '../actions/actions'
import { ListCities } from './ListCities'
import { SearchBar } from './SearchBar'

export const Menu = () => {
  const dispatch = useDispatch()
  const closeMenu = () => {
    dispatch(showMenu())
  }
  return (
    <div>
      <button onClick={closeMenu}>X</button>
      <SearchBar />
      <ListCities />
    </div>
  )
}
