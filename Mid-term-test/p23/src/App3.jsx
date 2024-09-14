import React from 'react'
import SortedTable from './SortedTable';
import { useState } from 'react';


const students =
[ {id: 1, name: 'Alice', major: 'IT', GPA: 3.2},

  {id: 2, name: 'Bob', major: 'SE', GPA: 2.4},
  
  {id: 3, name: 'Farol', major: 'SE', GPA: 2.8},
  
  {id: 4, name: 'David', major: 'IT', GPA: 3.8},
  
  {id: 5, name: 'Mai Dang Khoa', major: 'IT', GPA: 3.0}
];

function App3() {


  const [currentList, setCurrent]= useState(students);

  function sortedName(){
    const sortName = currentList.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    });

    setCurrent(sortName);

  }

  function sortedGPA(){
      const gpaSort = currentList.sort((a,b)=>
      a.GPA-b.GPA);

      setCurrent(gpaSort);
  }

  const num = [1,5,2,5,2,12];

  const [a,setA]=useState(num);


  function sortA(){
    const b = [...a].sort((a,b)=> a-b);
    setA(b);
  }

  const display = a.map((num)=>{
    return (
      <h1>{num}</h1>
    )
  })


  return (
    <div>
      {/* <SortedTable studentList={currentList} sortedName={sortedName} sortedGPA={sortedGPA}/> */}
      
      {display}

      <button type='button' onClick={sortA}>Click</button>
    </div>
  )
}

export default App3
