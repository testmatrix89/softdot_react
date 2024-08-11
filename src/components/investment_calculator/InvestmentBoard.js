import React, { useState } from 'react';
import UserInput from './UserInput';
import Results from './Results';

export default function InvestmentBoard() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10 
  })
  const isValidInput = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <h2 className='text-center'>Investment Calculator</h2>
      <UserInput userInput={userInput} onChange={handleChange} />
      { !isValidInput && <p className='center'> Please enter valid data or value</p> }
      { isValidInput && <Results userInput={userInput} /> }
    </>
  )
}
