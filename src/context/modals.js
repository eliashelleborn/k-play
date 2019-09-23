import React, { useState } from 'react';

const ModalsContext = React.createContext();

const ModalsProvider = ({ children }) => {
  const [open, setOpen] = useState({
    addToList: false,
    playlistActions: true,
    share: false
  });
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
    setOpen({
      ...open,
      [modal]: !open[modal]
    });
  };

  return (
    <ModalsContext.Provider value={{ open, toggleOpen, content, setContent }}>
      {children}
    </ModalsContext.Provider>
  );
};

const useAppModals = () => React.useContext(ModalsContext);

export { ModalsProvider, useAppModals };
