const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

export function fetchProductDetails(product_id) {
   return (dispatch) => {
    dispatch(request_product_details());
     fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${product_id}`)
     .then(handleErrors)
     .then(resp => resp.json())
     .then(product_detail_data => dispatch({
        type: 'FETCH_PRODUCT_DETAILS',
        payload: product_detail_data
     }))
     .catch(error => dispatch(fetchProductsFailure(error)));
   }
}

export function request_product_details(){
  return {
    type: 'REQUEST_PRODUCT_DETAILS'
  }
}

export function fetchProductsFailure(error) {
  console.log('inside action, error', error)
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: { error }
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
