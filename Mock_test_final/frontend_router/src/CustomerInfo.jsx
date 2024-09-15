import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CustomerInfo() {
  const customerId = useParams();

  const [info, setInfo] = useState(null);

  const URL = `http://localhost:2222/customers/${customerId.id}`;

  async function getCustomerInfo() {
    const res = await fetch(URL, { method: "GET" });
    const json = await res.json();

    setInfo(json);
  }

  useEffect(()=>{
    getCustomerInfo();
  },[customerId])

  const displayInfo =()=> {

    if(info != null){
        return (
        <ul>
            <li>ID: {info.customer.id}</li>
            <li>Name: {info.customer.name}</li>
            <li>Addres: {info.customer.address}</li>
        </ul>
        )
    }
  } 




  return (
  <div>
    <h2>Info</h2>

    {displayInfo()}

    <h2>Orders</h2>
      {info && info.orders && info.orders.length > 0 ? (
        <ul>
          {info.orders.map((order, index) => (
            <li key={index}>
              <p>
                <strong>Product ID:</strong> {order.product_id}
              </p>
              <p>
                <strong>Quantity:</strong> {order.quantity}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
  </div>
  );
}

export default CustomerInfo;
