import React, { useState } from 'react';

// Parent component
function Parent() {
  const [s, setS] = useState(10);

  function click(){
  setS(s + 10);
  alert(s);
  }

// Child component
  return (
   <button onClick={click}>Click me</button>
  );
}

export default Parent;