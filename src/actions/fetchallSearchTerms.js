
export function fetchallSearchTerms() {
 return (dispatch) => {
   console.log("Inside Allsearches action");
   fetch('http://localhost:3001/api/v1/searches')
   .then(resp => resp.json())
   .then(allSearches => {
      console.log("Inside Action then",allSearches);
      dispatch({
         type: 'ALL_SEARCHES',
         payload: allSearches
      })
    })
 }
}
