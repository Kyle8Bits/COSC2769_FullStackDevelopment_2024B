import React, {useState} from "react";

function App() {

  async function getCatFact(){
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  }

  const[fact, setCatFact] = useState('');

  const updateFact = async () => {
    const newFact = await getCatFact();
    setCatFact(newFact);
  };

  return(
    <>
    <h1>Hello</h1>
    <h2 className="cat-facts">{fact}</h2>
    <button onClick={updateFact}>Click Me</button>
    </>
  );
}

export default App;