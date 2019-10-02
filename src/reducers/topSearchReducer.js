
export default function topSearchReducer(state = {topSearches: []}, action) {
  switch (action.type) {
    case 'FETCH_TOP_SEARCHES':
      return {topSearches: action.payload}
    default:
      return state
  }
};

//reducer takes two parameters, intiail state and action - the action comes from action creator- the reducer is responsible for updating the state - returns default state - 
