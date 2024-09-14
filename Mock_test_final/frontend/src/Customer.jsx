import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'


function Customer(){

  const [customer, setCustomer] = useState([]);

  const URL = 'http://localhost:2222/customers';

  async function getCustomer() {
    const res = await fetch(URL, { method: "GET" });
    const json = await res.json();
    setCustomer(json);
  }

  useEffect(() => {
    getCustomer()
  },[]);

  const displayCustomer = customer.map( c =>{
    return(
      <li>
       <Link 
        to={`/customer/${c.id}`}>{c.name}</Link>
      </li>
    )
  })

  return (
    <div>
      <Header/>
      <h1>Customer Home</h1>

      <div id='list_outlet'>
        <ul>
         {displayCustomer}
        </ul>

        <Outlet/>
      </div>
    </div>
  )
}

export default Customer
