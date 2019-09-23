import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Heading, Text } from '../Typography';
import { Close, Plus } from '../Icons';

const StyledAddToList = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;
`;

const Info = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[5]}px 0;

  img {
    width: 20vw;
    height: 20vw;
    margin-right: ${({ theme }) => theme.space[3]}px;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  padding: 16px;
  position: absolute;
  left: 16px;
  top: 20px;
`;

const List = styled.div`
  margin-top: ${({ theme }) => theme.space[3]}px;
  border-top: 1px solid #f3f3f3;
  overflow-y: scroll;
`;

const Item = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;

  button {
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;

const AddToList = ({ hide, content }) => {
  return (
    <StyledAddToList>
      <CloseButton onClick={hide}>
        <Close size="16px" color="#363636" />
      </CloseButton>
      <Heading
        as="h2"
        textAlign="center"
        m="0"
        p="3"
        fontSize="20px"
        fontWeight="normal"
      >
        Lägg till i lista
      </Heading>

      {content && (
        <Info>
          <img src={content.image} alt="" />
          <div>
            <Heading as="h3" m="0" fontSize="20px" fontWeight="500">
              {content.title}
            </Heading>
            <Text m="0" mt="1" fontSize="16px" color="hideGrey">
              {content.subtitle}
            </Text>
          </div>
        </Info>
      )}

      <Button>Skapa ny lista</Button>

      <List>
        <Item>
          <Text fontWeight="500" m="0">
            Ljusvideos
          </Text>
          <button type="button">
            <Plus color="#AEAEAE" height="22px" width="22px" />
          </button>
        </Item>
        <Item>
          <Text fontWeight="500" m="0">
            Dela med klassen
          </Text>
          <button type="button">
            <Plus color="#AEAEAE" height="22px" width="22px" />
          </button>
        </Item>
        <Item>
          <Text fontWeight="500" m="0">
            Danspoddar
          </Text>
          <button type="button">
            <Plus color="#AEAEAE" height="22px" width="22px" />
          </button>
        </Item>
        <Item>
          <Text fontWeight="500" m="0">
            Lär mig nytt
          </Text>
          <button type="button">
            <Plus color="#AEAEAE" height="22px" width="22px" />
          </button>
        </Item>
        <Item>
          <Text fontWeight="500" m="0">
            Färglära
          </Text>
          <button type="button">
            <Plus color="#AEAEAE" height="22px" width="22px" />
          </button>
        </Item>
      </List>
    </StyledAddToList>
  );
};

export default AddToList;
