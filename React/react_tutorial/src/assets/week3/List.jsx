import React from 'react'
import './style.css'

export default function List(props) {

    const list = props.studentList;

    const studentList = 
    list.map(
        student => 
        <li className='student' key ={student.id}>
            <div className='id'>{student.id}</div>
            <div className='name'>{student.name}</div>
            <div className='major'>{student.major}</div>
            <div className='gpa'>{student.gpa}</div>
        </li>
    );

    const fruit = [{id: 1, name: 'Orange'}, {id:3, name:'Apple'}, {id:2, name:'Grapes'}];

    return (
        <>
            <ul className='header'>
                <div>ID</div>
                <div>Name</div>
                <div className='major'>Major</div>
                <div>GPA</div>
            </ul>
            <ul>      
                {studentList}
            </ul>
        </>    
    )
}
