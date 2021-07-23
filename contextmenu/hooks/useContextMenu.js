import { useEffect, useReducer } from 'react';
import { emitter } from '../index';

const initialState = {
  show: false,
  x: 0,
  y: 0,
}

function contextMenuReducer(state, action) {
  switch (action.type) {
    case "open": {
      return {
        ...state,
        ...initialState,
        show: true,
      }
    }
    case "close": {
      return {
        ...state,
        show: false
      }
    }
    case "update": {
      return {
        ...state,
        ...action.data,
      }
    }
    default: return state;
  }
}

const useContextMenu = () => {
  const [state, dispatch] = useReducer(contextMenuReducer, initialState);
  const update = (data) => dispatch({ type: "update", data });
  const close = () => dispatch({ type: "close" });
  useEffect(() => {
    emitter.subscribe('react-context-update-hook-#001', update);
    return () => {
      console.log('unmounted Hook')
      emitter.unsubscribe('react-context-update-hook-#001');
    };
  }, []);
  return { state, update, close };
};

export default useContextMenu;