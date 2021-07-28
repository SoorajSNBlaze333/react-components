/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";

const initialState = {
  show: false,
  data: [],
}

function stateReducer(state, action) {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        ...action.value
      }
    }
  }
  return state;
}

const useQuick = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log(state);
  return { state, dispatch };
};

export default useQuick;