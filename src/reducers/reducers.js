import { combineReducers } from 'redux'
import * as Constants from '../constants/types'

const initialState = {
  current: {
    isLoading: true,
    data: {}
  },
  other: {
    isLoading: true,
    data: []
  }
}

const currentDateRequest = (state=initialState, action) => {
  
  switch(action.type){

    case Constants.CURRENT_DATE_REQUEST:
      return {
        ...state,
        current: {
          isLoading: true,
        }
      }

    case Constants.CURRENT_DATE_SUCCESS:
      return {
        ...state,
        current: {
          isLoading: false,
          data: action.payload
        }
      }

    case Constants.CURRENT_CITY_REQUEST:
      return {
        ...state,
        other: {
          isLoading: true
        }
      }

    case Constants.CURRENT_CITY_SUCCESS:
      return {
        ...state,
        other: {
          isLoading: false,
          data: action.payload
        }
      }

    default: 
      return state
  }

}


export default combineReducers({
  default: currentDateRequest
})