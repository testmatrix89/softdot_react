import React from 'react';
import './assets/QuizStyles.css';
import Header from './Header';
import Quiz from './Quiz';

export default function QuizGamePage() {
  return (
    <div className='react-quick-game-page'>
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  )
}
