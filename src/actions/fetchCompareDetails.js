const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;

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
