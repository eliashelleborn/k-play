import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export const RouterContext = React.createContext({});

const CustomRouter = ({ children }) => (
  <BrowserRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

export default CustomRouter;
