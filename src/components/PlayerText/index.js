import React from 'react';
import styled from 'styled-components';
import { Plus, More } from '../Icons';

const StyledPlayerText = styled.div`
  margin: 0 auto;
  padding: 24px 16px;
  max-width: 960px;
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

  button {
    display: flex;
    align-items: center;
    padding: 8px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #aeaeae;
  line-height: 26px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #363636;

  &:nth-child(3) {
    margin-bottom: 0px;
  }
  &:nth-child(4) {
    margin: 0 0 24px 0;
  }
`;

const ImageContainer = styled.div`
  margin: 24px 0px;
  position: relative;

  > img {
    width: 100%;
  }
`;

const PlayerText = ({
  title,
  subtitle,
  date,
  description,
  image,
  text,
  onAddToList,
  onMore
}) => {
  return (
    <StyledPlayerText>
      <TitleContent>
        <p>{title}</p>
        <button type="button" onClick={onAddToList}>
          <Plus color="#EC733F" width="24" />
        </button>
        <button type="button" onClick={onMore}>
          <More />
        </button>
      </TitleContent>

      <Subtitle>{subtitle}</Subtitle>
      <Text>{date}</Text>
      <Text>{description}</Text>
      {image && (
        <ImageContainer>
          <img src={image} alt="" />
        </ImageContainer>
      )}

      <Text> {text} </Text>
    </StyledPlayerText>
  );
};

export default PlayerText;
