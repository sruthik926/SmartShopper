
export default function allSearchTermsReducer(state = {allSearches: []}, action) {
  switch (action.type) {
    case 'ALL_SEARCHES':
      console.log("Allsearch reducer",action.payload);
      return {allSearches: action.payload}
    default:
      return state
  }
};
