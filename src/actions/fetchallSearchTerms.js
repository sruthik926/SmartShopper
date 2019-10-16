
export function fetchallSearchTerms() {
 return (dispatch) => {
   console.log("Inside Allsearches action");
   fetch('http://localhost:3001/api/v1/searches')
   .then(resp => resp.json())
   .then(allSearchTerms => {
      console.log("Inside Action then",allSearchTerms);
      dispatch({
         type: 'ALL_SEARCHES',
         payload: allSearchTerms
      })
    })
 }
}
