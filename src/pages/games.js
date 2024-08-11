import React from 'react';
import '../components/games/TicTocStyles.css';
import LogoImg from '../components/games/game-logo.png';
import TicTacToe from '../components/games/ticTacToe';

export default function Games() {
  return (
    <div>
      <header>
        <img src={LogoImg} />
        <h1>Tic Tac Toe</h1>
      </header>
      <TicTacToe />
    </div>
  )
}
