import * as Constants from '../constants/types'

export const getCurrentDate = () => {
	return {
    	type: Constants.CURRENT_DATE_REQUEST
	}
}

export const getCurrentCity = message => {
	return {
		type: Constants.CURRENT_CITY_REQUEST,
		message
	}
}