// export function fetchSearchItem() {
//   return (dispatch) => {
//     dispatch({ type: '' });
//     return fetch('https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`')
//       .then(response => response.json())
//       .then(items => dispatch({ type: 'SEARCH_ITEMS', cats }));
//   };
// }
export function fetchTopSearches() {
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/top_searches')
     .then(resp => resp.json())
     .then(topSearches => dispatch({
        type: 'FETCH_TOP_SEARCHES',
        payload: topSearches
     }))


   }
  // return (dispatch) => {
  //   fetch('http://localhost:3001/api/v1/top_searches')
  //     .then(response => response.json())
  //     .then(topSearches => dispatch({{
  //       type: 'FETCH_TOP_SEARCHES',
  //       payload: topSearches
  //     }})
  //   }
}
