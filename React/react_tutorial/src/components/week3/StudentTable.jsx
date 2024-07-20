import React from 'react'
import StudentRow from './StudentRow'

export default function StudentTable({data}) {
    const tableBody = data.map(student => <StudentRow key={student.id}/>)

  return (
    <div>
      
    </div>
  )
}
