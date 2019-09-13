const theme = {
  colors: {
    orange: '#EC733F',
    grey: '#363636',
    lightGrey: '#D3D3D3',
    white: '#FFFFFF'
  },

  space: [0, 4, 8, 16, 24, 32, 48, 64], // margin & padding
  breakpoints: ['480px', '768px', '992px', '1200px'] // Just took these to start with: https://ricostacruz.com/til/css-media-query-breakpoints
};

theme.mediaQueries = {
  small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  large: `@media screen and (min-width: ${theme.breakpoints[2]})`,
  desktop: `@media screen and (min-width: ${theme.breakpoints[3]})`
};

export default theme;
