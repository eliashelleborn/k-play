import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input';
import { Box } from '../../components/Util';
import Button from '../../components/Button';
import {
  LinkedIn,
  Google,
  Facebook,
  Email,
  Password
} from '../../components/Icons';
import RememberMe from '../../components/RememberMe';
import { Text, Heading } from '../../components/Typography';
import Loading from '../../components/Loading';
import firebase from '../../firebase';

const StyledBox = styled(Box)`
  background-color: white;
`;

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading as="h2" fontWeight="500">
        Logga in
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

      <StyledBox mt="5">
        <form onSubmit={signIn}>
          <Input
            borderTop="1px solid"
            borderTopColor="lineGrey"
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
          <RememberMe
            value={remember}
            onChange={() => setRemember(!remember)}
          />
          <Button type="submit">{loading ? <Loading /> : 'Logga in'}</Button>
          <Text textAlign="center">
            Glömt lösenord?{' '}
            <Link to="/auth" style={{ color: '#363636', fontWeight: '500' }}>
              Klicka här
            </Link>
          </Text>

          {error && <p>{error.message}</p>}
        </form>
      </StyledBox>
    </div>
  );
};

export default withRouter(Login);
