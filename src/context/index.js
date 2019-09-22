import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import theme from '../style/theme';
import { PlayerProvider } from './player';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PlayerProvider>{children}</PlayerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
