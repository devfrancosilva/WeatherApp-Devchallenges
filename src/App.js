import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentCity } from './actions/actions'

export const App = () => {
  const dispatch = useDispatch()

  dispatch(getCurrentCity())
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}
