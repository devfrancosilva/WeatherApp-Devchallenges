import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import style from './Highligths.module.css'

function Visibility() {
  const value = useSelector((state) => state.current.visibility)
  const [valueInMiles, setValueToMiles] = useState(0);

  useEffect(() => {
    setValueToMiles((value * 0.000621371).toFixed(2))
  }, [value])

  

  return (
    <div className={style.containerHigh}>
      <h6 className={style.title__h6}>Visibility</h6>
      <h1 className={style.title__h1}>{valueInMiles}
        <span className={style.title__unity}>miles</span>
      </h1>
    </div>
  )
}

export default Visibility;