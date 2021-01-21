import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewCity } from '../actions/actions'
import styles from 'styled-components'

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

export const ListCities = () => {
  const { cities } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {cities &&
          cities.map((city) => (
            <Item
              onClick={() =>
                dispatch(getNewCity(city.coord.lat, city.coord.lon))
              }

            >
              {`${city.name}, ${city.sys.country}`}
              <span class="material-icons">
                navigate_next
              </span>
            </Item>
          ))}
      </ul>
    </div>
  )
}
