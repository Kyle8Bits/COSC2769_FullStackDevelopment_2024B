import React from 'react'

export default function StudentRow({data}) {
  return (
    <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.major}</td>
        <td>{data.gpa}</td>

    </tr>
  )
}
