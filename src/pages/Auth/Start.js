import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heading, Text } from '../../components/Typography';
import Button from '../../components/Button';

const StyledStart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonDivider = styled.div`
  padding: ${({ theme }) => theme.space[3]}px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  div {
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.hideGrey};
  }
`;

const Logo = styled.svg`
  width: 100px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

const Start = () => {
  return (
    <StyledStart>
      <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570 600">
        <path
          fill="#ec733f"
          d="M410.82 77.04l-91.95 159.27h183.91L410.82 77.04z"
        />
        <path
          fill="#363636"
          d="M420.12 347.37H206.41l145.73 249.34h213.71L420.12 347.37zM4.15 3.29h202.26v593.42H4.15z"
        />
      </Logo>
      <Heading as="h3" m="0" fontStyle="italic">
        K-Play
      </Heading>
      <Text mb="90px">Kulturakademins playtjänst</Text>
      <Button as={Link} to="/auth/skapa-konto">
        Skapa konto
      </Button>
      <ButtonDivider>
        <div />
        <Text m="0" px="3" color="hideGrey">
          eller
        </Text>
        <div />
      </ButtonDivider>
      <Button as={Link} to="/auth/logga-in" bg="lineGrey" color="grey">
        Logga in
      </Button>
    </StyledStart>
  );
};

export default Start;
