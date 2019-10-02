
export default function productDetailReducer(state = {productDetails: []}, action) {
  switch (action.type) {
    case 'FETCH_PRODUCT_DETAILS':
      return {productDetails: action.payload}
    default:
      return state
  }
};

//reducer takes two parameters, intiail state and action - the action comes from action creator- the reducer is responsible for updating the state - returns default state - 
