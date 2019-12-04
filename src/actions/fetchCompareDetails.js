const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

export function fetchCompareDetails(product_id) {
   return (dispatch) => {
     dispatch(request_compare_details());
     fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${product_id}`)
     .then(handleErrors)
     .then(resp => resp.json())
     .then(compare_detail_data => dispatch({
        type: 'FETCH_COMPARE_DETAILS',
        payload: compare_detail_data
     }))
     .catch(console.log(error => dispatch(fetchCompareDetailsFailure(error))));
   }
}

export function request_compare_details(){
  return {
    type: 'REQUEST_COMPARE_DETAILS'
  }
}

export function fetchCompareDetailsFailure(error) {
  console.log('inside action, error', error)
  return {
    type: 'FETCH_COMPARE_DETAILS_FAILURE',
    payload: { error }
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
