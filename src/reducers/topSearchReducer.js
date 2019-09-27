
export default function topSearchReducer(state = {topSearches: []}, action) {
  switch (action.type) {
    case 'FETCH_TOP_SEARCHES':
      return {topSearches: action.payload}
    default:
      return state
  }
};
