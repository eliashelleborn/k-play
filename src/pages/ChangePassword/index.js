import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Heading } from '../../components/Typography';
import { Box } from '../../components/Util';
import Input from '../../components/Input';
import ArrowBack from '../../components/Icons/ArrowBack';

const SettingsWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  align-items: space-between;
  justify-content: space-between;
  max-width: 100%;
  margin: auto;

  ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 543px;
    margin: auto;
    padding: 50px 100px;
    justify-content: space-around;
  }
`;

const StyledHeading = styled(Heading)`
  margin-top: 0px;
  padding-top: 34px;
  display: flex;
  align-items: center;

  > p {
    margin: 0;
    margin-bottom: 4px;
    margin-left: 16px;
  }
`;

const StyledButton = styled(Button)`
  box-shadow: none;
  font-weight: normal;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
  border-top: 1px solid #f3f3f3;
  > div div {
    padding: 0;
  }
  > p {
    font-weight: 500;
    margin: 12px 0 0;
  }
  &:last-child {
    border-bottom: 1px solid #f3f3f3;
  }
`;

const StyledInput = styled(Input)`
  height: 50px;

  > input {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const NewPassWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 0px;
  }

  > p span {
    font-weight: 500;
  }
`;

const ChangePassword = () => {
  return (
    <SettingsWrapper>
      <div>
        <StyledHeading as="h2" fontWeight="500">
          <NavLink to="/inställningar">
            <ArrowBack />
          </NavLink>
          <p> Ändra lösenord </p>
        </StyledHeading>

        <Box mt="5">
          <form>
            <InputWrapper>
              <p> Nuvarande lösenord </p>
              <StyledInput
                borderTop="0px solid"
                borderBottom="0px solid"
                type="password"
              />
            </InputWrapper>

            <InputWrapper>
              <p> Nytt lösenord </p>
              <StyledInput
                borderTop="0px solid"
                borderBottom="0px solid"
                type="password"
              />
            </InputWrapper>

            <InputWrapper>
              <p> Upprepa nytt lösenord </p>
              <StyledInput
                borderTop="0px solid"
                borderBottom="0px solid"
                type="password"
              />
            </InputWrapper>
          </form>
        </Box>
      </div>
      <div>
        <StyledButton color="white" bg="#EC733F" fontSize="16px" mb="3">
          Uppdatera lösenord
        </StyledButton>
        <NewPassWrapper>
          <p>
            {' '}
            Glömt lösenord? <span> Skicka ett nytt </span>{' '}
          </p>
        </NewPassWrapper>
      </div>
    </SettingsWrapper>
  );
};

export default ChangePassword;
