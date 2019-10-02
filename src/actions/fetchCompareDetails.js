const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

export function fetchCompareDetails(product_id) {
   return (dispatch) => {
     fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${product_id}`)
     .then(resp => resp.json())
     .then(compare_detail_data => dispatch({
        type: 'FETCH_COMPARE_DETAILS',
        payload: compare_detail_data
     }))
   }
}

// action creator - named fetchCompareDetails - passes product id as a parameter, fetch call to retrieve the ProductDetails - type is a key of the hash - tells you the action to pass in -returns the product_detail_data - to dispatch then goes to reducer
