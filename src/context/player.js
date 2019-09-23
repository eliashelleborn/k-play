import React, { useReducer } from 'react';

const PlayerContext = React.createContext();

// Action types
export const PLAYER_OPEN = 'PLAYER_OPEN';
export const PLAYER_CLOSE = 'PLAYER_CLOSE';
export const PLAYER_MINIMIZE = 'PLAYER_MINIMIZE';
export const PLAYER_EXPAND = 'PLAYER_EXPAND';
export const PLAYER_TOGGLE_PLAYING = 'PLAYER_TOGGLE_PLAYING';
export const PLAYER_SET_CURRENT_MEDIA = 'PLAYER_SET_CURRENT_MEDIA';
export const PLAYER_CURRENT_TIME_UPDATE = 'PLAYER_CURRENT_TIME_UPDATE';

const playerReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case PLAYER_OPEN:
      return {
        ...state,
        open: true
      };
    case PLAYER_CLOSE:
      return {
        ...state,
        open: false
      };
    case PLAYER_MINIMIZE:
      return {
        ...state,
        minimized: true
      };
    case PLAYER_EXPAND:
      return {
        ...state,
        minimized: false
      };
    case PLAYER_TOGGLE_PLAYING:
      return {
        ...state,
        playing: !state.playing
      };
    case PLAYER_SET_CURRENT_MEDIA:
      return {
        ...state,
        currentMedia: action.payload,
        playing: true
      };
    default:
      throw new Error('Unexpected action');
  }
};

const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, {
    open: false,
    minimized: false,
    playing: false,
    currentMedia: {
      url: 'https://www.youtube.com/watch?v=yGkn5KYk6sg',
      duration: 1381,
      type: 'VIDEO',
      title: 'Test',
      image:
        'https://images.unsplash.com/photo-1569231175150-118ced11e66b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      description: 'Test description',
      episode: '1/3',
      createdAt: Date.now()
    },
    queue: []
  });

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => React.useContext(PlayerContext);

export { PlayerProvider, usePlayer };
