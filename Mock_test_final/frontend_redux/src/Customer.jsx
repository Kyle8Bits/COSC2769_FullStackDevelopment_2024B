import React, { useEffect} from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../redux/customerSlice';


function Customer(){
  
  const dispatch = useDispatch();
  const {customers} = useSelector(state => state.customer);

  useEffect(() => {
    dispatch(getCustomer());
  },[]);

  const displayCustomer = customers.map( c =>{
    return(
      <li>
       <Link style={c.isFavor?{fontWeight:900}:{fontWeight:100}}
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
