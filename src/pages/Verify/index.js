import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

const Verify = ({ match }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toLogin, setToLogin] = useState(false);

  const verify = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await Auth.confirmSignUp(match.params.email, code);
      setToLogin(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (toLogin && !loading) return <Redirect to="/logga-in" />;

  return (
    <div>
      <p>Verifiera Email</p>
      <form onSubmit={verify}>
        <input
          type="text"
          name="code"
          placeholder="Verifieringskod"
          value={code}
          onChange={e => setCode(e.target.value)}
        />

        <button type="submit">Verifiera</button>
        {loading && <p>Laddar...</p>}
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default Verify;
