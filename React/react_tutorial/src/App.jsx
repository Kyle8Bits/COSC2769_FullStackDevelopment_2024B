import { useState } from 'react'
import Calculator from './assets/week3/Calculator'
import List from './assets/week3/List'

function App() {
  const student = [
    {id:1, name: "Alice", major: "Information Technology", gpa: 3.2},
    {id:3, name: "Carol", major: "Computer Science", gpa: 2.8},
    {id:2, name: "Bob", major: "Software Engineering", gpa: 3.6},
  ]
  return (
    <>
      <Calculator/>
      <List studentList ={student} />
    </>
  )
}

export default App
