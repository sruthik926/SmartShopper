import React from 'react'

 import { Link, Route, Router,HashRouter } from "react-router-dom";
// import About from './About'
// import ItemFrontCard from './ItemFrontCard'
// import { BrowserRouter as Router, Route} from "react-router-dom";
 import ProductDetail from './ProductDetail'
 import CompareCard from './CompareCard'
// import CompareCard from './CompareCard'
import './Item.css'


import './newstyle.css'

//const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
//const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   paddingTop: "50px"
// };


// const ItemDetail = ({
//   product_id,
//   product_title,
//   product_link,
//   product_image,
//   product_lowest_price
// }) => {
//
//   return (
//    <Router>
//       <tr className="item-card">
//         <img src={product_image} />
//   <Link to={`/${product_id}`} component={ProductDetail}> Product Details </Link>
//   <Link to='/item' component={CompareCard}>Compare</Link>
//   <Route exact path={`/${product_id}`} render={()=><ProductDetail product_id={product_id}/>}/>
//   <Route exact path='/item' render={()=><CompareCard product_id={product_id}/>}/>
// </tr>
//    </Router>
//   );
// }

class Item extends React.Component {
  state = {
    items: [],
  };



  render() {
        console.log('props', this.props.items)
        {this.state.items = this.props.items}
         console.log('items', this.state.items)
        // {console.log('Item', this.state.items)}
         // {console.log('prop', this.props.items.length)}
         // {console.log('length', this.state.items.length)}
        //  {console.log('items', this.state.items)}
        // {item.product_title} <img src={item.product_image}
        if(this.state.items === undefined ){
           return <center> There are no items found for the search criteria  </center>
        }
    return (
        <div>
            <table>
              {this.state.items.map((item, index) => (
                  <td>
                      <p> &nbsp;</p>
                      <p></p>
                      <p>  <img src={item.product_image}/></p>
                       <p>{item.product_title}</p>
                       <HashRouter>
                          <p><Link to={`/Compare/${item.product_id}`} > Compare Prices </Link></p>
                          <p><Link to={`/${item.product_id}`} component={ProductDetail} > Product Details </Link></p>
                          <Route exact path={`/${item.product_id}`} render={()=><ProductDetail product_id={item.product_id}/>}/>
                          <Route exact path={`/Compare/${item.product_id}`} render={()=><CompareCard product_id={item.product_id}/>}/>
                        </HashRouter>
                 </td>


            ))}
            </table>

        </div>
    //
      );



  }
}


export default Item
