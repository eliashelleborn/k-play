import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import theme from '../style/theme';
import { PlayerProvider } from './player';
import { ModalsProvider } from './modals';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ModalsProvider>
          <PlayerProvider>{children}</PlayerProvider>
        </ModalsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
