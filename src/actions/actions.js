import types from '../types/types'

export const getCurrentCity = () => {
  return async (dispatch) => {
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos),
          (err) => reject(err)
        )
      })
      const { latitude, longitude } = pos.coords
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=910906c18c36848884a9e502f13402c2`
      const res = await fetch(url)
      const data = await res.json()
      data.daily = data.daily.slice(1, 6)
      dispatch(setCurrentCity(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const setCurrentCity = (data) => ({
  type: types.getCurrentCity,
  payload: data,
})

export const searchCities = (city) => {
  return async (dispatch) => {
    try {
      const url = `https://openweathermap.org/data/2.5/find?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02`
      const res = await fetch(url)
      const data = await res.json()
      dispatch(setCities(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const setCities = (cities) => ({
  type: types.setCities,
  payload: cities,
})

export const getNewCity = (lat, long) => {
  return async (dispatch) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=910906c18c36848884a9e502f13402c2`
    const res = await fetch(url)
    const data = await res.json()
    data.daily = data.daily.slice(1, 6)
    dispatch(setNewCity(data))
  }
}

const setNewCity = (city) => ({
  type: types.setNewCity,
  payload: city,
})
