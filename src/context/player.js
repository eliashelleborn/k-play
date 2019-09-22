import React, { useReducer } from 'react';

const PlayerContext = React.createContext();

// Action types
export const PLAYER_TOGGLE_OPEN = 'PLAYER_TOGGLE_OPEN';
export const PLAYER_TOGGLE_MINIMIZED = 'PLAYER_TOGGLE_MINIMIZED';
export const PLAYER_TOGGLE_PLAYING = 'PLAYER_TOGGLE_PLAYING';
export const PLAYER_SET_CURRENT_MEDIA = 'PLAYER_SET_CURRENT_MEDIA';

const playerReducer = (state, action) => {
  switch (action) {
    case PLAYER_TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
        minimized: state.open ? state.minimized : false
      };
    case PLAYER_TOGGLE_MINIMIZED:
      return {
        ...state,
        minimized: !state.minimized
      };
    case PLAYER_TOGGLE_PLAYING:
      return {
        ...state,
        playing: !state.playing
      };
    case PLAYER_SET_CURRENT_MEDIA:
      return {
        ...state,
        currentMedia: action.payload
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
      url: 'https://www.youtube.com/watch?v=Cln0J87vulU',
      duration: 1120,
      type: 'VIDEO',
      title: 'Test',
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
