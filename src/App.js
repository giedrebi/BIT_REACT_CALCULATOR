import { useState } from 'react';
import './App.css';

function App() {
  const [calculator, setCalculator] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  return (
    <div className='calculator'>
      <h1>CALCULATOR</h1>
      <input type="text" onChange={e => setFirstNumber(e.target.value)}/>
      <input type="text" onChange={e => setSecondNumber(e.target.value)}/> <br/>
      <button onClick={calculatorSum => setCalculator(parseInt(firstNumber) + parseInt(secondNumber))}>+</button>
      <button onClick={calculatorSubstraction => setCalculator(parseInt(firstNumber) - parseInt(secondNumber))}>-</button>
      <button onClick={calculatorMultiply => setCalculator(parseInt(firstNumber) * parseInt(secondNumber))}>*</button>
      <button onClick={calculatorDivide => setCalculator(parseInt(firstNumber) / parseInt(secondNumber))}>/</button>
      <p>Answer: {calculator}</p>
    </div>
  );
}

export default App;
