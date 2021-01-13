import React from 'react'
import { useSelector } from 'react-redux'
import style from './Highligths.module.css'

function Humidity() {
  const value = useSelector((state) => state.current.humidity)
  return (
    <div className={style.containerHigh}>
      <h6 className={style.title__h6}>Humidity</h6>
      <h1 className={style.title__h1}>
        {value}
        <span className={style.title__unity}>%</span>
      </h1>
      <div className={style.progress__container}>
        <label className={style.labels}>
          <span>0</span>
          <span>50</span>
          <span>100</span>    
        </label>
        <progress className={style.progress__bar} id="file" max="100" value={`${value}`}></progress>
        <p className={style.progress__porcentaje}><span> %</span></p> 
      </div>
    </div>
  )
}

export default Humidity;