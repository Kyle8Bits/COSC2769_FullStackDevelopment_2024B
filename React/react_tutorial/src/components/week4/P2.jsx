import React, { useState } from 'react';

function P2() {

  const [value, setValue] = useState(0);

  function changeMe() {
    setValue(value + 1);
    if (value == 1) {
      alert('Hello');
    }
  }

  return (
    <>
      <h1>Hello {value}</h1>
      <button onClick={changeMe}>Click me to change</button>
      <p>The HTML <code>button</code> tag defines a clickable button.</p>
      <p>The CSS <code>background-color</code> property defines the background color of an element.</p>
    </>
  );
}

export default P2;