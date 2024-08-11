import React from 'react'

export default function GameOver({winner, restartMatch}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      { winner && <p>{winner} wins!</p> }
      { !winner && <p>It&apos;s draw!</p> }
      <p><button onClick={restartMatch}>Rematch!</button></p>
    </div>
  )
}
