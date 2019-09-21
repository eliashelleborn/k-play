import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import theme from '../style/theme';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
