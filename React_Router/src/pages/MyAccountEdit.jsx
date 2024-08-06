import React from 'react';
import { updateMyAccount } from '../api/account';
import { useLoaderData, Form, useNavigate, redirect } from 'react-router-dom';

export async function saveMyAccount({ request }) {
  const formData = await request.formData();
  const newData = Object.fromEntries(formData);
  console.log(newData)
  await updateMyAccount(newData);
  return redirect('/account');
}


export default function MyAccountEdit() {
  const myAccount = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>My Account</h2>
      <Form method="post">
        <div>
          <label>First Name</label>
          <input name="fname" defaultValue={myAccount.fname} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lname" defaultValue={myAccount.lname} />
        </div>
        <div>
          <label>Address</label>
          <input name="address" defaultValue={myAccount.address} />
        </div>
        <div>
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" onClick={() => navigate(-1)} />
        </div>
      </Form>
    </>
  )
}
