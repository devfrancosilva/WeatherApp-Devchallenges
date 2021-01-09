import types from '../types/types'

const initialState = {
  current: {},
  week: [],
  currentTimezone: '',
  loading: true,
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCurrentCity:
      return {
        current: action.payload.current,
        week: action.payload.daily,
        currentTimezone: action.payload.timezone,
        loading: false,
      }
    default:
      return state
  }
}
