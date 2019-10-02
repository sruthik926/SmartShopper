
export function fetchTopSearches() {
 return (dispatch) => {
   fetch('http://localhost:3001/api/v1/top_searches')
   .then(resp => resp.json())
   .then(topSearches => {
      console.log("Inside Action",topSearches);
      dispatch({
         type: 'FETCH_TOP_SEARCHES',
         payload: topSearches
      })
    })
 }
}

// action creator - named fetchTopSearches - no parameter required - fetch call to retrieve the TopSearches  - type is a key of the hash - tells you the action to pass in -returns the top_searches  - to dispatch then goes to reducer
