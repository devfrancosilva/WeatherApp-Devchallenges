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
