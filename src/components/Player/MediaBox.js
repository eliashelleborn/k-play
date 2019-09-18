import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledMediaBox = styled.div`
  width: 100%;
  flex: 1;
  max-height: 300px;
  position: relative;

  > div {
    top: 0;
    left: ${props => (props.type === 'video' ? 0 : '16px')};
    width: calc(100% - ${props => (props.type === 'video' ? '0px' : '32px')});
    height: 100%;
    position: absolute;
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

const MediaBox = forwardRef(({ playing, url, type, onReady }, ref) => {
  return (
    <StyledMediaBox type={type}>
      <div>
        <ReactPlayer
          ref={ref}
          width="100%"
          height="100%"
          url={url}
          playing={playing}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 }
            }
          }}
          onReady={onReady}
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
});

export default MediaBox;
