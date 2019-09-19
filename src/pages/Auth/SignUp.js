import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Heading } from '../../components/Typography';
import {
  Facebook,
  Google,
  LinkedIn,
  Email,
  Password
} from '../../components/Icons';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Box } from '../../components/Util';

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
      <Heading as="h2" fontWeight="500">
        Skapa konto
      </Heading>
      <Button
        icon={<Facebook />}
        color="white"
        bg="#2553B4"
        fontSize="14px"
        mb="3"
      >
        Sign in with Facebook
      </Button>
      <Button
        icon={<Google />}
        color="rgba(0, 0, 0, 0.54)"
        bg="white"
        fontSize="14px"
        mb="3"
      >
        Sign in with Google
      </Button>
      <Button icon={<LinkedIn />} color="white" bg="#0077B5" fontSize="14px">
        Sign in with LinkedIn
      </Button>

      <Box mt="5">
        <form onSubmit={signIn}>
          <Input
            borderTop="1px solid"
            borderTopColor="hideGrey"
            type="email"
            icon={<Email />}
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={<Password />}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Skapa konto</Button>
          {loading && <p>Skapar konto...</p>}
          {error && <p>{error.message}</p>}
        </form>
      </Box>

      {/*  <form onSubmit={signIn}>
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
  
      </form> */}
    </div>
  );
};

export default SignUp;
