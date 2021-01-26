import React from 'react'
import { useDispatch } from 'react-redux'
import { showMenu, clearCurrentSearch, clearCities } from '../actions/actions'
import { ListCities } from './ListCities'
import { SearchBar } from './SearchBar'
import styles from 'styled-components'

const MenuStyles = styles.div`
  min-height: 100vh;
  background: #1E213A;
  transition: .5s;
  .buttonContainer {
    color: #E7E7EB;
    text-align: right;
    button {
      margin: 1em 1em 0 0;
      background: transparent;
      cursor: pointer;
      border: none;
      .icon-close {
        color: #E7E7EB;
      }
      @media (min-width: 1000px){
        margin-right: 3em;  
      }
    }

  }
`

export const Menu = () => {
  const dispatch = useDispatch()
  const closeMenu = () => {
    dispatch(showMenu())
    dispatch(clearCurrentSearch())
    dispatch(clearCities())
  }
  return (
    <MenuStyles>
      <p className="buttonContainer">
        <button onClick={closeMenu}>
          <span class="material-icons icon-close">
            close
          </span>
        </button>
      </p>
      <SearchBar />
      <ListCities />
    </MenuStyles>
  )
}
