import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
        setSuccessMessage(`Welcome, ${username}!`);
    } else {
        setFailMessage('Invalid username or password');
    }
  };

  return (
    <div>
        <h1>Login Page</h1>
        {successMessage?<p>{successMessage}</p> : 
        <>
        <p>{failMessage}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}required />
        <br />
        <button type="submit">Submit</button>
      </form>
      </>
      }
    </div>
  );
};

export default XLogin;