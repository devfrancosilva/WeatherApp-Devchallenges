import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewCity } from '../actions/actions'

export const ListCities = () => {
  const { cities } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <ol>
        {cities &&
          cities.map((city) => (
            <li
              onClick={() =>
                dispatch(getNewCity(city.coord.lat, city.coord.lon))
              }
            >
              {`${city.name}, ${city.sys.country}`}
            </li>
          ))}
      </ol>
    </div>
  )
}
