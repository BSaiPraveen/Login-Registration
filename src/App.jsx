
import React, { useState } from "react";
import "./App.css";

function App() {
  // Registration state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);
  const [details, setDetails] = useState("");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");

  // Registration function
  const handleRegister = (e) => {
    e.preventDefault();

    const user = { name, email, password };
    setRegisteredUser(user);

    setDetails(
      `Name: ${name}\nEmail: ${email}\nPassword: ${password}`
    );

    alert("Registration Successful!");
  };

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();

    if (
      registeredUser &&
      loginEmail === registeredUser.email &&
      loginPassword === registeredUser.password
    ) {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Email or Password!");
    }
  };

  return (
    <div className="container">
      <h1>Login and Registration Forms</h1>

      <div className="form">
        <h2>Registration Form</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        {details && (
          <pre>{details}</pre>
        )}
      </div>

      <div className="form">
        <h2>Login Form</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <h3>{message}</h3>
      </div>
    </div>
  );
}

export default App;
