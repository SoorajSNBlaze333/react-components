/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";

const initialState = {
  previousValue: 0,
  currentValue: 0,
  operation: null,
}

function stateReducer(state, action) {
  switch (action.type) {
    case "number": {
      return {
        ...state,
        currentValue: action.value.currentValue
      }
    }
    case "calculate": {
      return {
        ...state,
        operation: action.value.operation
      }
    }
    default: break;
  }
  return state;
}

const useCalculator = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return { state, dispatch };
};

export default useCalculator;