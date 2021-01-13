import types from '../types/types'

const initialState = {
  current: {},
  week: [],
  currentTimezone: '',
  loading: true,
  cities: [],
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCurrentCity:
      return {
        ...state,
        current: action.payload.current,
        week: action.payload.daily,
        currentTimezone: action.payload.timezone,
        loading: false,
      }
    case types.setCities:
      return {
        ...state,
        cities: action.payload.list,
      }
    case types.setNewCity:
      return {
        ...state,
        current: action.payload.current,
        week: action.payload.daily,
        currentTimezone: action.payload.timezone,
      }
    default:
      return state
  }
}
