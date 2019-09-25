import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Heading } from '../../components/Typography';
import { Box } from '../../components/Util';
import Input from '../../components/Input';
import Edit from '../../components/Icons/Edit';
import firebase from '../../firebase';

const SettingsWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  align-items: space-between;
  justify-content: space-between;
`;

const StyledHeading = styled(Heading)`
  margin-top: 0px;
  padding-top: 34px;
`;

const StyledButton = styled(Button)`
  box-shadow: none;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  border-top: 1px solid #f3f3f3;
  > div div {
    padding: 0;
  }
  > p {
    font-weight: 500;
    width: 80px;
  }
  &:last-child {
    border-bottom: 1px solid #f3f3f3;
  }
`;

const EditWrapper = styled.div`
  margin-right: 8px;
`;

const Settings = ({ history }) => {
  return (
    <SettingsWrapper>
      <div>
        <StyledHeading as="h2" fontWeight="500">
          Inställningar
        </StyledHeading>

        <Box mt="5">
          <form>
            <InputWrapper>
              <p> Profilnamn </p>
              <Input
                borderTop="0px solid"
                borderBottom="0px solid"
                type="name"
              />
              <EditWrapper>
                <Edit />
              </EditWrapper>
            </InputWrapper>

            <InputWrapper>
              <p> Email </p>
              <Input
                borderTop="0px solid"
                borderBottom="0px solid"
                type="email"
              />
              <EditWrapper>
                <Edit />
              </EditWrapper>
            </InputWrapper>

            <InputWrapper>
              <p> Lösenord </p>
              <Input
                borderTop="0px solid"
                borderBottom="0px solid"
                type="password"
              />
              <NavLink to="/ändra-lösenord">
                <EditWrapper>
                  <Edit />
                </EditWrapper>
              </NavLink>
            </InputWrapper>
          </form>
        </Box>
      </div>
      <div>
        <StyledButton
          color="white"
          bg="#EC733F"
          fontSize="16px"
          mb="3"
          onClick={() => {
            firebase.auth().signOut();
            history.push('/');
          }}
        >
          Logga ut
        </StyledButton>

        <StyledButton color="#363636" bg="#F3F3F3" fontSize="16px" mb="3">
          Avsluta konto
        </StyledButton>
      </div>
    </SettingsWrapper>
  );
};

export default withRouter(Settings);
