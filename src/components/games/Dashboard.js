import React from 'react';
import LogoImg from '../games/TicTacToe/game-logo.png';
import quizLogo from './QuizTypeGame/assets/quiz-logo.png';

export default function Dashboard({ handleChangeThePage }) {
  return (
    <div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
      <div className='d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden'>
        <button onClick={() => handleChangeThePage({ name: 'TIC_TAC_TOE' })}>
          <img src={LogoImg} alt='Logo' width='120' />
          <div>Tic Tac Toe</div>
        </button>
      </div>

      <div className='d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden'>
        <button onClick={() => handleChangeThePage({ name: 'QUIZ_GAME_PAGE' })}>
          <img src={quizLogo} alt='Logo' width='120' />
          <div>Quiz Type Game</div>
        </button>
      </div>
    </div>
  )
}
