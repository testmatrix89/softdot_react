import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName, handleActivePlayer }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditClick(){
    setIsEditing(editing => !editing);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
      
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className='player-name'>{ playerName }</span>;

  if (isEditing){
    editablePlayerName = <input type="text" onChange={handleChange} required value={playerName} />
  }

  return (
    <li className={ isActive ? 'active' : undefined }>
      <input type='radio' name='active_player' onChange={handleActivePlayer} value={ symbol } checked={isActive} />
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{ symbol }</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}
