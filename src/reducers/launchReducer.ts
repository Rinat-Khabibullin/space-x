import type { Action, State } from "../types/Launch";

export const initial: State = {
  launches: [],
  selectedLaunch: null,
  isModalOpen: false,
  loading: false,
};
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_SUCCESS": 
      return {...state, launches: action.payload, loading: false};
      case "FETCH_LOADING": 
      return {...state, loading: true};
    case "FETCH_ERROR": 
      return {...state, loading: false};
    case "OPEN_MODAL": 
      return {...state, isModalOpen: true, selectedLaunch: action.payload};
    case "CLOSE_MODAL": 
      return {...state, isModalOpen: false, selectedLaunch: null};
    default: 
      return {...state}
  }
}

