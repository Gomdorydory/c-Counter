import { useState, useEffect } from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

const CountdownTimer = ({countdownTimestampsMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() =>{
        updateRemainingTime(countdownTimestampsMs);
    }, 1000);
    return () => clearInterval(intervalId);
  },[countdownTimestampsMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return(
      <div className='countdown-timer'>
        <span>{remainingTime.days}</span>
        <span>days</span>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>hours</span>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>minutes</span>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
  );
}

export default CountdownTimer;