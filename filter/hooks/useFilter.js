/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from "react";

const initialState = {
  show: false,
  data: [
    { key: 'Under review', category: 'status', value: 'under_review' },
    { key: 'Planned', category: 'status', value: 'planned' },
    { key: 'In Progres', category: 'status', value: 'in_progress' },
    { key: 'Completed', category: 'status', value: 'completed' },
  ],
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