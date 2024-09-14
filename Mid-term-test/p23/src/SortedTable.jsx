import React from 'react'


function SortedTable({
    studentList,
    sortedName,
    sortedGPA
}) {

    const data = studentList.map((stu)=>{
        return(
            <>
            <tr>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.major}</td>
                <td>{stu.GPA}</td>
            </tr>
            </>
        )
    })

  return (
    <div>
        <table className='table'>
            <tr>
                <th>ID</th>
                <th><button type='button' onClick={sortedName}>Name</button></th>
                <th>Major</th>
                <th><button type='button' onClick={sortedGPA}>GPA</button></th>
            </tr>

            {data}
        </table>
    </div>
  )
}

export default SortedTable
