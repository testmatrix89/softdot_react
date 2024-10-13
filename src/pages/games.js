import React, { useState } from 'react';
import TicTacToePage from '../components/games/TicTacToe/TicTacToePage';
import Dashboard from '../components/games/Dashboard';
import QuizGamePage from '../components/games/QuizTypeGame/QuizGamePage';

export default function Games() {
  const [gameName, setGameName] = useState({name: 'GAME_DASHBOARD'});

  function handleChangeThePage(pageName){
    setGameName(pageName);
  }

  function handleGamePageView(pageName){
    switch(pageName.name){
      case 'GAME_DASHBOARD':
        return <Dashboard handleChangeThePage={handleChangeThePage} />
      case 'TIC_TAC_TOE':
        return <TicTacToePage />
      case 'QUIZ_GAME_PAGE':
        return <QuizGamePage />
      default:
        return <Dashboard handleChangeThePage={handleChangeThePage} />
    }
  }

  const backButtonStyle = {
    position: 'absolute',
    top: '90px',
    left: '20px',
    background: 'black',
    zIndex: 999999,
    color: 'white',
    border: '1px solid yellow',
    borderRadius: '5px',
    padding: '5px 15px'
  }
  return (
    <div className=''>
      <div className='game-container'>
        {
          gameName.name !== 'GAME_DASHBOARD' && (<button onClick={ () => handleChangeThePage({name: 'GAME_DASHBOARD'}) } style={ backButtonStyle }> {`<< Back`} </button>)
        }
      </div>
      { gameName.name !== 'GAME_DASHBOARD' ? handleGamePageView(gameName) : <Dashboard handleChangeThePage={handleChangeThePage} /> }
    </div>
  )
}
