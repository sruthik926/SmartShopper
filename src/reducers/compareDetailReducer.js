
export default function compareDetailReducer(state = {compareDetails: []}, action) {
  switch (action.type) {
    case 'FETCH_COMPARE_DETAILS':
      return {compareDetails: action.payload}
    default:
      return state
  }
};

//reducer takes two parameters, intiail state and action - the action comes from action creator- the reducer is responsible for updating the state - returns default state -
