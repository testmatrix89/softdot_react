import React, { useRef, useState } from 'react'

export default function TimeChallenge({title, targetTime}) {
  const timer = useRef();
  const [timerStart, SetTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    SetTimerStart(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <div className='challenge'>
      <h2>{title}</h2>
      {timerExpired ?? <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <button onClick={timerStart ? handleStop : handleStart}>
        { timerStart ? 'Stop' : 'Start' } Challenge
      </button>
      <p className=''>
      { timerStart ? 'Time is running...' : 'Timer inactive' }
      </p>
    </div>
  )
}
