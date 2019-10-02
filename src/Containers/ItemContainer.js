import React from 'react'
import { Link, Route, HashRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchProductDetails } from '../actions/fetchProductDetails.js'
import { fetchCompareDetails } from '../actions/fetchCompareDetails.js'
import ProductDetail from '../Components/ProductDetail'
import CompareCard from '../Components/CompareCard'
import '../Item.css'
import '../newstyle.css'


class ItemContainer extends React.Component {



 handleClickProductDetail (product_id) {

    console.log('product_id inside handleClickProductDetail', product_id)
    this.props.fetchProductDetails(product_id);
    console.log("Kris-Product Details",this.props.productDetails)
  }
// handleClickproductDetail function which takes an item's product_id as a parameter - calls the fetchProductDetails action creator

 handleClickCompareDetail (product_id) {

     console.log('product_id inside handleClickCompareDetail', product_id)
    this.props.fetchCompareDetails(product_id);

    // handleClickCompareDetail function which takes an item's product_id as a parameter - calls the fetchCompareDetails action creator

 }

 // items props is being passed from SearchContainer component - and mapping over the items array. Setting the link to Compare and Product Detail component - invoking the handleClickProductDetail and handleClickCompareDetail onClick - also being called within HashRouter

  render() {

      if(this.props.items === undefined ){
            return <center> <p>&nbsp;</p> Please enter a string value to search for items </center>
         }
        return (
        <div>
            <table>
              {this.props.items && this.props.items.map((item, index) => (

                  <td>
                      <p> &nbsp;</p>
                      <p></p>
                      <p>  <img src={item.product_image} alt="product_image"/></p>
                       <p>{item.product_title}</p>

                       <HashRouter>
                          <p><Link to={`/Compare/${item.product_id}`} onClick={() => this.handleClickCompareDetail(item.product_id)}> Compare Prices </Link></p>
                          <p><Link to={`/${item.product_id}`}  onClick={ () => this.handleClickProductDetail(item.product_id)}> Product Details </Link></p>
                          <Route exact path={`/Compare/${item.product_id}`} render={()=><CompareCard compare_detail={this.props.compareDetails}/>}/>
                          <Route exact path={`/${item.product_id}`} render={()=><ProductDetail product_detail={this.props.productDetails}/>}/>
                        </HashRouter>
                 </td>


            ))}
            </table>

        </div>
      );

  }
}

//mapStateToProps - returning productDetails and compareDetails from Redux store - as props -

const mapStateToProps = state => {
  return (
    {productDetails: state.productDetailReducer.productDetails,
     compareDetails: state.compareDetailReducer.compareDetails }
  )
}


export default connect(mapStateToProps, {fetchProductDetails, fetchCompareDetails})(ItemContainer);
//connecting ItemContainer to Redux store - passing mapStateToProps and two action creators -
