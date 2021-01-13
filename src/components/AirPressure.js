import React from 'react'
import { useSelector } from 'react-redux'
import style from './Highligths.module.css'

function AirPressure() {
  const value = useSelector((state) => state.current.pressure)
  return (
    <div className={style.containerHigh}>
      <h6 className={style.title__h6}>AirPressure</h6>
      <h1 className={style.title__h1}>{value}
        <span className={style.title__unity}>mb</span>
      </h1>
    </div>
  )
}

export default AirPressure;