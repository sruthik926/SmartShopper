import React from 'react'

import { Link, Route, Router,HashRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchProductDetails } from './actions/fetchProductDetails.js'
import { fetchCompareDetails } from './actions/fetchCompareDetails.js'
// import About from './About'
// import ItemFrontCard from './ItemFrontCard'
// import { BrowserRouter as Router, Route} from "react-router-dom";
 import ProductDetail from './ProductDetail'
 import CompareCard from './CompareCard'
// import CompareCard from './CompareCard'
import './Item.css'


import './newstyle.css'



class Item extends React.Component {
  state = {
    items: [],
  };

 handleClickProductDetail(product_id){
    console.log('product_id inside handleClickProductDetail', product_id)
    this.props.fetchProductDetails(product_id);
  }

 handleClickCompareDetail(product_id){
    console.log('product_id inside handleClickCompareDetail', product_id)
    this.props.fetchCompareDetails(product_id);
 }

  render() {
      console.log("Prop-items",this.props.items)
      if(this.props.items === undefined ){
            return <center> <p>&nbsp;</p> Please enter a string value to search for items </center>
         }
        return (
        <div>
            <table>
              {this.props.items.map((item, index) => (
                  <td>
                      <p> &nbsp;</p>
                      <p></p>
                      <p>  <img src={item.product_image}/></p>
                       <p>{item.product_title}</p>
                       <HashRouter>
                          <p><Link to={`/Compare/${item.product_id}`} component={CompareCard} onClick={this.handleClickCompareDetail(item.product_id)}> Compare Prices </Link></p>
                          <p><Link to={`/${item.product_id}`} component={ProductDetail} onClick={this.handleClickProductDetail(item.product_id)}> Product Details </Link></p>
                          {console.log('product_detail', this.props.productDetails)}
                          <Route exact path={`/${item.product_id}`} render={()=><ProductDetail product_detail={this.props.productDetails.data.main_specs}/>}/>
                          <Route exact path={`/Compare/${item.product_id}`} render={()=><CompareCard compare_detail={this.props.compareDetails.data.stores}/>}/>
                           {console.log('compare_detail inside Item render', this.props.compareDetails)}
                        </HashRouter>
                 </td>


            ))}
            </table>

        </div>
      );



  }
}

const mapStateToProps = state => {
  return (
    {productDetails: state.productDetailReducer.productDetails,
     compareDetails: state.compareDetailReducer.compareDetails }
  )
}

const mapDispatchToProps = dispatch => ({
  fetchProductDetails: product_id => dispatch(fetchProductDetails(product_id)),
  fetchCompareDetails: product_id => dispatch(fetchCompareDetails(product_id))
})



export default  connect(mapStateToProps, mapDispatchToProps)(Item);
