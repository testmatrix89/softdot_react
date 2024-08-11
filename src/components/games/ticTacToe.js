import React, { useState } from 'react';
import Player from './player';
import GameBoard from './gameBoard';
import Log from './Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './GameOver';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for(const turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export default function TicTacToe() {
  const [isResetDisable, setIsResetDisable] = useState(true)
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const [changeActivePlayer, setChangeActivePlayer] = useState('X')

  const currentPlayer = gameTurns.length == 0 ? changeActivePlayer : deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setIsResetDisable(reset => reset = false);
    setGameTurns((prevTurns) => {
      deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  };

  function handleRestart(){
    setIsResetDisable(reset => reset = true);
    setGameTurns([]);
  }

  function resetGameNow(){
    setIsResetDisable(reset => reset = true);
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  function setActivePlayer(event) {
    setChangeActivePlayer(event.target.value);
    console.log(event.target.value)
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player initialName={PLAYERS.X} symbol="X" isActive={ currentPlayer === 'X' } onChangeName={handlePlayerNameChange} handleActivePlayer={setActivePlayer} />
        <Player initialName={PLAYERS.O} symbol="O" isActive={ currentPlayer === 'O' } onChangeName={handlePlayerNameChange} handleActivePlayer={setActivePlayer} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} restartMatch={handleRestart} />}
      <GameBoard onSelectSquare={handleSelectSquare} board={ gameBoard } />
      <div className='text-center'><button onClick={resetGameNow} disabled={isResetDisable}>Reset This Game Now!</button></div>
    </div>
    <Log turns={gameTurns} />
  </main>
}
