import React from 'react'




class ProductDetail extends React.Component {







 render() {
      console.log('sru inside productDetails', this.props.product_detail)
        return(

          <div>
              <table>
              <th>Main Specs </th>
                {this.props.product_detail.data && this.props.product_detail.data.main_specs.map((product_detail, index) => (
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

// ProductDetails are being stored in Redux, but pass down as a prop from ItemContainer component, - basic map of json object - of product details

export default ProductDetail
