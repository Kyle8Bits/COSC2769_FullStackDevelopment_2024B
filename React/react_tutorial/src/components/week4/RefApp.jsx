import { useRef, useState } from 'react';

function IncreaseDecreaseNumber({ value, onIncrease, onDecrease }) {
  return (
    <>
      <h2>{value}</h2>
      <button onClick={onIncrease}> + </button>&nbsp;&nbsp;
      <button onClick={onDecrease}> - </button>
    </>
  );
}

export default function RefApp() {
  const [number, setNumber] = useState(0);
  const txtNumber = useRef(null);

  const handleIncrease = () => {
    const plus = number + 1;
    setNumber(plus);
  }

  const handleDecrease = () => {
    const minus = number - 1;
    setNumber(minus)
  }

  const handleCopy = () => {
    const copy = parseInt(txtNumber.current.value, 10);
    setNumber(copy)
  }

  return (
    <>
      <IncreaseDecreaseNumber
        value={number}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease} />

      <div>
        <input type='number' ref={txtNumber} placeholder='0' />
        <button onClick={handleCopy}>Copy</button>
        <h1>{number+1}</h1>
      </div>
    </>
  )
}
