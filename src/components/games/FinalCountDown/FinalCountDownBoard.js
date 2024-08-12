import React from 'react';
import Player from './Player';
import './FinalCountDown.css';
import TimeChallenge from './TimeChallenge';

export default function FinalCountDownBoard() {
  return (
    <div className='final-count-down-section'>
      <Player />
      <div id="challenges">
        <TimeChallenge title='Easy' targetTime={1} />
        <TimeChallenge title='Not Easy' targetTime={5} />
        <TimeChallenge title='Getting Tough' targetTime={10} />
        <TimeChallenge title='Pros Only' targetTime={15} />
      </div>
    </div>
  )
}
