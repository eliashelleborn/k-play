import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SignUp = () => {
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
      await Auth.signUp({
        username: email,
        password
      });
      setToVerify(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (toVerify && !loading) return <Redirect to={`/verify/${email}`} />;

  return (
    <div>
      <p>Skapa konto</p>
      <form onSubmit={signIn}>
        <input
          type="email"
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
        <button type="submit">Skapa konto</button>
        {loading && <p>Skapar konto...</p>}
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
