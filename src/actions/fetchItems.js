const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;

export function fetchItems(searchTerm) {
   console.log('inside search action', searchTerm)
   return (dispatch) => {
     fetch(BASE_URL.concat(searchTerm))
     .then(resp => resp.json())
     .then(searches => dispatch({
        type: 'FETCH_SEARCHES',
        payload: searches
     }))


   }

}
// action creator - named fetchSearches - passes searchTerm as a parameter, fetch call to retrieve the ProductDetails - type is a key of the hash - tells you the action to pass in -returns the searched items  - to dispatch then goes to reducer
