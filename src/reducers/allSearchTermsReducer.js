
export default function allSearchTermsReducer(state = {allSearchTerms: []}, action) {
  switch (action.type) {
    case 'ALL_SEARCHES':
      console.log("Allsearch reducer",action.payload);
      return {...state, allSearchTerms: action.payload}
    case 'UPDATE_SEARCH_TERM':
      console.log('insert search term action', action)
      return {
          ...state,
          allSearchTerms: [...state.allSearchTerms, {id: action.res.id, searchterm: action.res.searchterm, created_at: action.res.created_at} ] }
    default:
      return state
  }
};
