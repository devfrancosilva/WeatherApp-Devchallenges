import React from 'react'
import styles from 'styled-components'
import { useDispatch } from 'react-redux'
import { getNewCity, showMenu, clearCurrentSearch, clearCities} from '../actions/actions'

const Item = styles.li`
  border: 1px solid transparent;
  background: none;
  height: 64px;
  width: 351px;
  margin: 0 auto;
  padding: 22px 12px;
  color: #E7E7EB;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content:space-between;
  cursor: pointer;
  span {
    color: #616475;
    display: none;
  }
  &:hover {
    border: 1px solid #616475;
    span{
      display: block;
    } 
  }
`

export default function ShowCities({cities}) {
  const dispatch = useDispatch()
  const handleClick = (city) => {
    dispatch(getNewCity(city.coord.lat, city.coord.lon))
    addCityToLS(city)
    dispatch(showMenu())
    dispatch(clearCurrentSearch())
    dispatch(clearCities())
  }

  const addCityToLS = (city) => {
    const lastCities = JSON.parse(localStorage.getItem('lastSearches')) || [];
    const isInTheSearches = lastCities.find(item => city.id === item.id)
    if(!isInTheSearches){
      lastCities.unshift(city);
      localStorage.setItem('lastSearches', JSON.stringify(lastCities));
    }
  }

  return (
    <ul>
      {cities &&
        cities.map((city) => (
          <Item
            onClick={() => handleClick(city)}
          >
            {`${city.name}, ${city.sys.country}`}
            <span class="material-icons">
              navigate_next
            </span>
          </Item>
        ))}
    </ul>
  )
}
