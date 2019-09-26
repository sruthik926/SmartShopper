const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;

//   };
// }
export function fetchSearches(searchTerm) {
   {console.log('inside search action', searchTerm)}
   return (dispatch) => {
     fetch(BASE_URL.concat(searchTerm))
     .then(resp => resp.json())
     .then(searches => dispatch({
        type: 'FETCH_SEARCHES',
        payload: searches
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
