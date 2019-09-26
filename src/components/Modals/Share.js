import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import {
  Close,
  ArrowBack,
  FacebookShare,
  Messenger,
  Sms,
  LinkedInShare,
  EmailShare,
  Copylink
} from '../Icons';
import { List, Item } from '../List';

const StyledShare = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;

  > div div button {
    background-color: transparent;
    border: none;
    transform: rotate(180deg);
    margin-right: 24px;
  }
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

const StyledItem = styled(Item)`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
`;

const Share = ({ hide, content }) => {
  return (
    <StyledShare>
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
        Dela
      </Heading>

      {content && (
        <Info>
          <img src={content.image} alt="" />
          <div>
            <Heading as="h3" m="0" fontSize="20px" fontWeight="500">
              {content.title || content.name}
            </Heading>
            {content.subtitle && (
              <Text m="0" mt="1" fontSize="16px" color="hideGrey">
                {content.subtitle}
              </Text>
            )}
          </div>
        </Info>
      )}

      <List>
        <StyledItem
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=https://kplay-g2.netlify.com/${(content.title
                ? 'play/'
                : 'spellista/') + content.id}`,
              '_blank'
            )
          }
        >
          <div>
            <FacebookShare />
            <Text m="0" ml="3">
              Facebook
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
        <StyledItem>
          <div>
            <Messenger />
            <Text m="0" ml="3">
              Messenger
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
        <StyledItem>
          <div>
            <Sms />
            <Text m="0" ml="3">
              SMS
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
        <StyledItem>
          <div>
            <LinkedInShare />
            <Text m="0" ml="3">
              LinkedIn
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
        <StyledItem>
          <div>
            <EmailShare />
            <Text m="0" ml="3">
              E-mail
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
        <StyledItem>
          <div>
            <Copylink />
            <Text m="0" ml="3">
              Kopiera länk
            </Text>
          </div>
          <button type="button">
            <ArrowBack />
          </button>
        </StyledItem>
      </List>
    </StyledShare>
  );
};

export default Share;
