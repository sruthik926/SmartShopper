
export default function topSearchReducer(state = {topSearches: []}, action) {
  console.log('action', action);
  console.log('Inside Top Search reducer state', state);
  switch (action.type) {
    case 'FETCH_TOP_SEARCHES':
      return {topSearches: action.payload}
    case 'UPDATE_TOP_SEARCH':
     console.log('Inside update top search')
      return {
        ...state,
        topSearches: [
            // update first item of array
            {
                // copy the previous state of map
                ...state.topSearches[0],
                // update item of map -
                // if searchterm was already there increase the count, otherwise add value 1
                [action.searchTerm]: (
                    action.searchTerm in state.topSearches[0] ?
                        state.topSearches[0][action.searchTerm] + 1 :
                        1
                )
            },
            // just put shallow copy of all other items
            ...state.topSearches.slice(1)
        ]
    }
    default:
      return state
  }
};

//reducer takes two parameters, intiail state and action - the action comes from action creator- the reducer is responsible for updating the state - returns default state -
