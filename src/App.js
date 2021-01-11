import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentCity } from './actions/actions'
import { Today } from './components/Today'
import { Week } from './components/Week'

export const App = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCurrentCity())
  }, [dispatch])

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <Today />
      <Week />
    </div>
  )
}
