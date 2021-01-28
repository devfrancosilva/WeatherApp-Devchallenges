import types from '../types/types'
import { API_KEY, API_KEY_TO_SEARCH } from '../services/setting'

export const getCurrentCity = () => {
  return async (dispatch) => {
    dispatch(setLoadingToday())
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos),
          (err) => reject(err)
        )
      })
      const { latitude, longitude } = pos.coords
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
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
      const url = `https://openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY_TO_SEARCH}`
      const res = await fetch(url)
      const data = await res.json()
      dispatch(setCities(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const setCities = (cities) => ({
  type: types.setCities,
  payload: cities,
})

export const getNewCity = (lat, long) => {
  return async (dispatch) => {
    dispatch(setLoadingToday())
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
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

export const showMenu = () => ({
  type: types.showMenu,
})

export const setCurrentSearch = (city) => ({
  type: types.setCurrentSearch,
  payload: city,
})

export const clearCurrentSearch = () => ({
  type: types.clearCurrentSearch,
})

export const clearCities = () => ({
  type: types.clearCities,
})

export const setLoadingToday = () => ({
  type: types.setLoadingToday,
})

export const setFahrenheit = () => ({
  type: types.setFahrenheit,
})

export const setCelsius = () => ({
  type: types.setCelsius,
})
