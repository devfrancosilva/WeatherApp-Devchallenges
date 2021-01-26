import types from '../types/types'

const initialState = {
  current: {},
  week: [],
  currentTimezone: '',
  loading: true,
  cities: [],
  showMenu: false, 
  currentSearch : '',
  loadingSearch: false,
  loadingToday: false
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
        loadingToday: false
      }
    case types.setCities:
      return {
        ...state,
        loadingSearch: false,
        cities: action.payload.list,
      }
    case types.setNewCity:
      return {
        ...state,
        current: action.payload.current,
        week: action.payload.daily,
        currentTimezone: action.payload.timezone,
        loadingToday: false
      }
    case types.showMenu:
      return {
        ...state,
        showMenu: !state.showMenu,
      }

    case types.setCurrentSearch:
      return {
        ...state,
        loadingSearch: true,
        currentSearch : action.payload
      }

    case types.clearCurrentSearch:
      return {
        ...state,
        currentSearch : ''
      }
    
    case types.clearCities:
      return {
        ...state,
        cities: []
      }

    case types.setLoadingToday: 
      return {
        ...state,
        loadingToday: true
      }
    
    default:
      return state
  }
}
