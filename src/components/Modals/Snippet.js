import React from 'react';
import styled from 'styled-components';
import { Range } from 'rc-slider';
import { Snippet as SnippetIcon, Close, Plus } from '../Icons';
import { Text } from '../Typography';

const StyledSnippet = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: ${({ theme }) => theme.space[3]}px;
  }
`;

const Slider = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[7]}px;
`;

const Snippet = ({ hide, onChange, onFinished, value, max }) => {
  return (
    <StyledSnippet>
      <Header>
        <button onClick={hide} type="button">
          <Close size="16px" color="#EC733F" />
        </button>
        <SnippetIcon color="#AEAEAE" />
        <button onClick={onFinished} type="button">
          <Plus height="20px" width="20px" color="#EC733F" />
        </button>
      </Header>
      <Text fontSize="20px" px="4" py="3" textAlign="center">
        Dra i reglagen och markera en del av spåret. Välj + för att spara.
      </Text>
      <Slider>
        <Text m="0" mr="3">
          {new Date(value[0] * 1000)
            .toISOString()
            .substring(value[0] > 3600 ? 11 : 14, 19)}
        </Text>
        <Range
          value={value}
          defaultValue={[0, max]}
          max={max}
          onChange={onChange}
          style={{ height: '19px', padding: 0 }}
          railStyle={{
            height: '19px',
            backgroundColor: '#F3F3F3',
            borderRadius: 0
          }}
          trackStyle={[
            { height: '19px', backgroundColor: '#EC733F', borderRadius: 0 }
          ]}
          handleStyle={[
            {
              height: '50px',
              backgroundColor: '#363636',
              borderRadius: 0,
              width: '3px',
              border: 'none',
              marginTop: '-15px'
            },
            {
              height: '50px',
              backgroundColor: '#363636',
              borderRadius: 0,
              width: '3px',
              border: 'none',
              marginTop: '-15px'
            }
          ]}
        />
        <Text m="0" ml="3">
          {new Date(value[1] * 1000)
            .toISOString()
            .substring(value[1] > 3600 ? 11 : 14, 19)}
        </Text>
      </Slider>
    </StyledSnippet>
  );
};

export default Snippet;
