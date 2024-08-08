import React, { useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { getAccount } from "../api/account";

export async function loadAccount() {
  const accounts = await getAccount();
  return accounts;
}

function Login() {
  const auth = useLoaderData();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [valid, setValid] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    authority({ validU: userName, validP: passWord });
  };

  function authority({ validU, validP }) {
    const userInput = auth.find((u) => u.user === validU);

    if (userInput && userInput.pass === validP) {
      navigate("/store");
    } else {
      const validarity = false;
      setValid(validarity);
      console.log(valid);
    }
  }

  function renderErrorMessage() {
    if (!valid) {
      return <h1 style={{ backgroundColor: 'red' }}>Wrong username or password</h1>;
    }
    return null;
  }

  return (
    <>
      <h1>Login</h1>
      <Form className="login-hub" method="post" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            name="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </Form>

      {renderErrorMessage()}
    </>
  );
}

export default Login;
