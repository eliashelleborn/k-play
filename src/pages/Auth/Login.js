import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toVerify, setToVerify] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await Auth.signIn({ username: email, password });
    } catch (err) {
      setError(err);
      if (err.code === 'UserNotConfirmedException') {
        setToVerify(true);
      }
    } finally {
      setLoading(false);
    }
  };

  if (toVerify && !loading) return <Redirect to={`/verify/${email}`} />;

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
