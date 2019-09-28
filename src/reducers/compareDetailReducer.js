
export default function compareDetailReducer(state = {compareDetails: []}, action) {
  switch (action.type) {
    case 'FETCH_COMPARE_DETAILS':
      return {compareDetails: action.payload}
    default:
      return state
  }
};
