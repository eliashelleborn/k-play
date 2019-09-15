import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const StyledBanner = styled.div`
  ${space}
  ${color}
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
`;

const Tint = styled.div`
  background-color: ${props => props.tint || 'none'};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Banner = ({ image, tint, children, ...rest }) => {
  return (
    <StyledBanner {...rest}>
      {children}
      <Tint tint={tint} />
      {image && <Image src={image} alt="Banner image" />}
    </StyledBanner>
  );
};

Banner.defaultProps = {
  py: 6
};

export default Banner;
