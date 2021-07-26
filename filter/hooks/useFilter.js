import { useReducer } from "react";

const initialState = {
  show: false,
  filters: [],
}

function filterReducer(state, action) {
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
  }
  return state;
}

const useFilter = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const toggle = () => dispatch({ type: state.show ? "hide" : "show" });
  return { state, toggle };
};

export default useFilter;