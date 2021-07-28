/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";

const initialState = {
  show: false,
  list: [],
}

function stateReducer(state, action) {
  switch (action.type) {
    case "show": {
      return {
        ...state,
        show: true
      }
    }
    case "hide": {
      return {
        ...state,
        show: false
      }
    }
    case "data": {
      return {
        ...state,
        list: [...action.value]
      }
    }
    default: break;
  }
  return state;
}

const useQuick = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return { state, dispatch };
};

export default useQuick;