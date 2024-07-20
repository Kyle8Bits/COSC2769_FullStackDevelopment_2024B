import React from 'react'

export default function CalculatorTea() {

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
      <button className="button">
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
        <div className="result"></div>
        <div className='temp'></div>
          <div className='numpad'>
            {numpad}
            <div className="col"><button className="button" id='equal'>=</button></div>
          </div>
      </div>
    </>
  )
}
