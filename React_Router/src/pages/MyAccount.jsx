import React from 'react'
import Header from '../components/Header'
import { getAccount } from '../api/account'
import { useLoaderData ,Link} from 'react-router-dom';



export async function loadAccount(){
  const info = await getAccount();
  return info;
}

function MyAccount() {
  const info = useLoaderData();

  return (
    <>
      <Header/>
      <p>First Name: {info.fname}</p>
      <p>Last Name: {info.lname}</p>
      <p>Add: {info.address}</p>
      <Link to='edit'>Edit</Link>
    </>
  )
}

export default MyAccount
