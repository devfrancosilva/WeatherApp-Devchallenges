import React from 'react'
import { useSelector } from 'react-redux'
import style from './Highligths.module.css'

function Wind() {
  const value = useSelector((state) => state.current.wind_speed)
  return (
    <div className={style.containerHigh}>
      <h6 className={style.title__h6}>Wind Status</h6>
      <h1 className={style.title__h1}>{value}
        <span className={style.title__unity}>mph</span>
      </h1>
      <p className= {style.text__details}>
          <i className="fas fa-location-arrow"></i>
          WSW
      </p>
    </div>
  )
}

export default Wind;