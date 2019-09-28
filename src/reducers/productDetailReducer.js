
export default function productDetailReducer(state = {productDetails: []}, action) {
  switch (action.type) {
    case 'FETCH_PRODUCT_DETAILS':
      return {productDetails: action.payload}
    default:
      return state
  }
};
