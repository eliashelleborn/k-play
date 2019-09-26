import React, { useState } from 'react';
import { useAuth } from './auth';

const ModalsContext = React.createContext();

const initialModals = {
  addToList: false,
  playlistActions: false,
  share: false,
  trackActions: false,
  createPlaylist: false,
  login: false
};

const requiresAuth = ['addToList', 'createPlaylist'];

const ModalsProvider = ({ children }) => {
  const [open, setOpen] = useState(initialModals);
  const { authUser } = useAuth();
  const [content, setContent] = useState({
    url: 'https://www.youtube.com/watch?v=yGkn5KYk6sg',
    duration: 1381,
    type: 'VIDEO',
    title: 'Dansare - oavsett vilkor?',
    subtitle: 'I samarbete med Folkteatern',
    image:
      'https://images.unsplash.com/photo-1569231175150-118ced11e66b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Test description',
    episode: '1/3',
    createdAt: Date.now()
  });

  const toggleOpen = modal => {
    if (!authUser && requiresAuth.includes(modal)) {
      setOpen({
        ...initialModals,
        login: !open.auth
      });
    } else {
      setOpen({
        ...initialModals,
        [modal]: !open[modal]
      });
    }
  };

  return (
    <ModalsContext.Provider value={{ open, toggleOpen, content, setContent }}>
      {children}
    </ModalsContext.Provider>
  );
};

const useAppModals = () => React.useContext(ModalsContext);

export { ModalsProvider, useAppModals };
