import React from 'react';
import styled from 'styled-components';
import { Plus, More } from '../Icons';

const StyledPlayerText = styled.div`
  margin: 24px 16px;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 24px;
    font-weight: 500;
    margin: 6px 0;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #AEAEAE;
  letter-spacing: 0.5px;
  line-height: 26px;
`;

const Text = styled.p`
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 26px;

  &:nth-child(3) {
    margin-bottom: 0px;
    letter-spacing: 0px;
  }
  &:nth-child(4) {
    margin: 0 0 24px 0;
    letter-spacing: 0px;
  }
`;

const ImageContainer = styled.div`
  margin: 24px 0;
`;


const ListPlayerText = ({ title, subtitle, arranged, date, description, image, text }) => {
  return (
    <StyledPlayerText>
      <TitleContent>
        <p> {title} </p>
        <Plus color={'#EC733F'} width={'24'}/>
        <More />
      </TitleContent>

      <Subtitle> {subtitle} </Subtitle>
      <Text> {arranged} </Text>
      <Text> {date} </Text>
      <Text> {description} </Text>
      <ImageContainer>
        {image && <img src={image} alt="" />}
      </ImageContainer>
      <Text> {text} </Text>
    </StyledPlayerText>
  );
};

export default ListPlayerText;
