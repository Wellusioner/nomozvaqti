import moment from 'moment';

const time = {
	isNow: (beforeTime, afterTime) => {

    const now = moment().unix();
    const currentTime = moment().format('HH:mm')
    
    if(beforeTime <= currentTime  && currentTime < afterTime){
    	return 'active'
    }
  },
}

export default time;