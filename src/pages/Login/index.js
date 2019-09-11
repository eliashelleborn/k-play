import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await Auth.signIn({ username: email, password });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>Logga in</p>
      <form onSubmit={signIn}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Logga in</button>
        {loading && <p>Loggar in...</p>}
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default Login;
