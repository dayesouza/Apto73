import React from 'react';

export default function Login({ error, login }) {
  return (
    <div>
      {error && (
        <p>
          <span>An error occured during authentication, please try again!</span>
        </p>
      )}
      <p>
        <span>Hey stranger, you look new!</span>
        <button onClick={login}>Login</button>
      </p>
    </div>
  );
}
