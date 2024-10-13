import React from 'react';
import './TicTocStyles.css';
import LogoImg from './game-logo.png';
import TicTacToe from './ticTacToe';

export default function TicTacToePage() {
  return (
    <div className='tic-toc-toe-game-section'>
      <header>
        <img src={LogoImg} alt='Logo' />
        <h1>Tic Tac Toe</h1>
      </header>
      <TicTacToe />
    </div>
  )
}
