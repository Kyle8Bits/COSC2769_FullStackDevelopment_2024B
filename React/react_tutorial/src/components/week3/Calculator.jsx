import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Calculator() {

  const [equation, setEquation] = useState('');
  const [temp, setTemp] = useState('');


  const inputNumber = (content) => {


    if(operator.includes(content)){
      setEquation(prevEquation => prevEquation + ' ' + content + ' ');
      setTemp('');
    }
    else if(content === '='){
      setTemp(calculate(equation))
    }
    else if(content === 'C'){
      setTemp('');
      setEquation('');
    }
    else if(content === 'DEL'){
      setEquation(equation.slice(0, -1));
      setTemp(temp.slice(0, -1));
    }
    else{
      setEquation(prevEquation => prevEquation + content);
      setTemp(prevEquation => prevEquation + content);
    }
   
  }

  const calculate = (expr)=> {
    const parts = expr.split(/([+\-*/X])/);

    const num1 = parseFloat(parts[0]);
    const operator = parts[1];
    const num2 = parseFloat(parts[2]);
  
    // Perform the calculation based on the operator
    switch (operator) {
      case 'X':
      case 'x':
      case '*':
        return num1 * num2;
      case '-':
        return num1 - num2;
      case '+':
        return num1 + num2;
      case '/':
        return num1 / num2;
      default:
        console.error('Invalid operator:', operator);
        return null;
    }
  }

  const numpadList =
  [
     '%', 'CE', 'C', 'DEL',
     '1/x', 'x^2', 'sqrt','/',
     '7','8','9','X',
     '4','5','6','-',
     '1','2','3','+',
     'x/-','0','.',
  ]

  const operator = [
    '+', 'X', '-','/'
  ]

  const numpad = numpadList.map((number, index) =>(
    <div className="col" key = {index}>
      <button onClick={() => inputNumber(number)} className="button">
        <div className="content">
          {number}
        </div>
      </button>
    </div>
  ));


  return (
    <>
      <div className='container'>
        <div className="title">Calculator</div>
        <div className="result">{temp}</div>
        <div className='temp'>{equation} &nbsp;</div>
          <div className='numpad'>
            {numpad}
            <div className="col"><button onClick={() => inputNumber("=")} className="button" id='equal'>=</button></div>
          </div>
      </div>
    </>
  )
}
