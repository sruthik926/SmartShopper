const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`

export function fetchProductDetails(product_id) {
   console.log('Inside action (Sru)product_id', product_id)
   return (dispatch) => {
     fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${product_id}`)
     .then(resp => resp.json())
     .then(product_detail_data => dispatch({
        type: 'FETCH_PRODUCT_DETAILS',
        payload: product_detail_data
     }))
   }
}
