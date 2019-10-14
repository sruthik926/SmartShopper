
export default function itemsReducer(state = {searches: []}, action) {
  switch (action.type) {
    case 'FETCH_SEARCHES':
      return {searches: action.payload}
    default:
      return state
  }
};

//reducer takes two parameters, intiail state and action - the action comes from action creator- the reducer is responsible for updating the state - returns default state -
