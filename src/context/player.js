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
export const PLAYER_NEXT = 'PLAYER_NEXT';
export const PLAYER_PREVIOUS = 'PLAYER_PREVIOUS';
export const PLAYER_SET_QUEUE = 'PLAYER_SET_QUEUE';
export const PLAYER_SET_PREVIOUS = 'PLAYER_SET_PREVIOUS';

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
    case PLAYER_NEXT:
      return {
        ...state,
        currentMedia: state.queue[0],
        queue: state.queue.slice(1),
        previous: [state.currentMedia, ...state.previous]
      };
    case PLAYER_PREVIOUS:
      return {
        ...state,
        currentMedia: state.previous[0],
        queue: [state.currentMedia, ...state.queue],
        previous: state.previous.slice(1)
      };
    case PLAYER_SET_QUEUE:
      return {
        ...state,
        queue: action.payload
      };
    case PLAYER_SET_PREVIOUS:
      return {
        ...state,
        previous: action.payload
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
    currentMedia: null,
    queue: [],
    previous: []
  });

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => React.useContext(PlayerContext);

export { PlayerProvider, usePlayer };
