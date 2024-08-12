import React, { Component } from 'react';
import FinalCountDownBoard from '../components/games/FinalCountDown/FinalCountDownBoard';

class Works extends Component {
  render() {
    return (
      <section className='final-count-down-section'>
        <div className='container'>
          <h1>Works CountDown</h1>
          <FinalCountDownBoard />
        </div>  
      </section>
    )
  }
}
export default Works;