import { takeLatest, all, put} from 'redux-saga/effects';
import * as Constants from '../constants/types.js';
import { API_ROOT } from '../services/api'


function* getCurrentDate () {
    
      const data = yield fetch(`${API_ROOT}timingsByCity?city=Tashkent&country=Uzbekistan&method=2`)
      	.then(response => response.json())
        .then(res => res.data.timings)
        .catch(err => console.log(err))
      
      yield put({
          type: Constants.CURRENT_DATE_SUCCESS,
          payload: data
      })
}


function* getCurrentCity(payload){
    
    const { month, year, city } = payload.message

    const data = yield fetch(`${API_ROOT}calendarByCity?city=${city}&country=Uzbekistan&method=2&month=${month}&year=${year}`)
        .then(response => response.json())
        .then(res => res.data)
        .catch(err => console.log(err))
    yield put({
        type: Constants.CURRENT_CITY_SUCCESS,
        payload: data
    })
}


export default function* root() {
    yield all([
        takeLatest(Constants.CURRENT_DATE_REQUEST, getCurrentDate),
        takeLatest(Constants.CURRENT_CITY_REQUEST, getCurrentCity),
    ])
}