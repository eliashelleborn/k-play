import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import SignUp from './SignUp';
import Login from './Login';
import Verify from './Verify';

import Start from './Start';

const AuthContainer = styled.div`
  height: calc(100vh - 65px);
  padding: 0 ${({ theme }) => theme.space[3]}px;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <Switch>
        <Route exact path="/auth" component={Start} />
        <Route path="/auth/logga-in" component={Login} />
        <Route path="/auth/skapa-konto" component={SignUp} />
        <Route path="/auth/verify/:email" component={Verify} />
      </Switch>
    </AuthContainer>
  );
};

export default Auth;
