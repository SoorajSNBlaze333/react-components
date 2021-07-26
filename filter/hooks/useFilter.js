import { useReducer } from "react";

const initialState = {
  show: true,
  filters: {
    'Filter by status': {
      'Under Review': 'under_review',
      'Planned': 'planned',
      'In Progress': 'in_progress',
      'Completed': 'completed',
    },
    'Filter by assignee': {
      'Assignee One': 1,
      'Assignee Two': 2,
      'Assignee Three': 3,
      'Assignee Four': 4,
    }
  },
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