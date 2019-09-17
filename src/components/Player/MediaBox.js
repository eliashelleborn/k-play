import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledMediaBox = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  padding: 0 ${props => (props.type === 'video' ? 0 : '16px')};

  > div {
    height: 100%;
    position: relative;
  }

  img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const MediaBox = ({ playing, url, type }) => {
  return (
    <StyledMediaBox type={type}>
      <div>
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          playing={playing}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 }
            }
          }}
        />
        {type === 'podcast' && (
          <img
            src="https://images.unsplash.com/photo-1562887106-0ba63ac82e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
            alt=""
          />
        )}
      </div>
    </StyledMediaBox>
  );
};

export default MediaBox;
