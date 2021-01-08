import types from '../types/types'

const initialState = {
  current: {},
  week: [],
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCurrentCity:
      return {
        current: action.payload.current,
        week: action.payload.daily,
      }
    default:
      return state
  }
}
