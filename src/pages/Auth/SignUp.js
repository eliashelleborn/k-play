import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../../components/Typography';
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
import RememberMe from '../../components/RememberMe';
import Loading from '../../components/Loading';
import firebase from '../../firebase';
import useRouter from '../../hooks/useRouter';

const StyledBox = styled(Box)`
  max-width: 343px;
  margin: auto;
  background-color: white;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 543px;
    padding: 0px 100px 50px;
  }
`;

const StyledHeading = styled(Heading)`
  max-width: 343px;
  margin: 20px auto;
  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 40px auto;
  }
`;

const StyledButton = styled(Button)`
  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 343px;
    margin: 16px auto;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 343px;
  margin: auto;

  ${({ theme }) => theme.mediaQueries.medium} {
    background-color: white;
    max-width: 543px;
    padding: 50px 100px 20px;
    margin: auto;
  }
`;

const SignUp = () => {
  const { history } = useRouter();
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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ButtonWrapper>
        <StyledHeading as="h2" fontWeight="500">
          Skapa konto
        </StyledHeading>
        <StyledButton
          icon={<Facebook />}
          color="white"
          bg="#2553B4"
          fontSize="14px"
          mb="3"
        >
          Sign in with Facebook
        </StyledButton>
        <StyledButton
          icon={<Google />}
          color="rgba(0, 0, 0, 0.54)"
          bg="white"
          fontSize="14px"
          mb="3"
        >
          Sign in with Google
        </StyledButton>
        <StyledButton
          icon={<LinkedIn />}
          color="white"
          bg="#0077B5"
          fontSize="14px"
        >
          Sign in with LinkedIn
        </StyledButton>
      </ButtonWrapper>

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
          <Button type="submit">{loading ? <Loading /> : 'Skapa konto'}</Button>
          <Text textAlign="center">
            Har du redan ett konto?{' '}
            <Link
              to="/auth/logga-in"
              style={{ color: '#363636', fontWeight: '500' }}
            >
              Logga in
            </Link>
          </Text>
          {error && <p>{error.message}</p>}
        </form>
      </StyledBox>
    </div>
  );
};

export default SignUp;
