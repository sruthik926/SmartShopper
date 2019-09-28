import React from 'react'
//import { Button} from 'reactstrap';
 import { Link, Route, Router,HashRouter } from "react-router-dom";
import { fetchProductDetails } from './actions/fetchProductDetails.js'


const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;
  // {this.state.product_details.main_specs}

class ProductDetail extends React.Component {
    state = {
      productDetails: []

  };

 render() {
      {console.log('productDetails', this.state.productDetails)}
        return(

          <div>

              <table>
              <th>Main Specs </th>
                {this.props.product_detail.map((product_detail, index) => (
                    <tr>
                        <td>{product_detail}</td>
                        <p> &nbsp;</p>
                  </tr>

              ))}
              </table>

          </div>

      )
  }


}



export default ProductDetail
