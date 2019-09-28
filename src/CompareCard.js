import React from 'react'
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// {Object.values(this.state.product_compare).map((storeObj, index) => {
//   for (let key of Object.keys(storeObj)) {
//       let store = storeObj[key];
// // ... do something with mealName
//    // return <li> {store.product_price}, {store.product_store}</li>;
//    return <li> {store.product_price}, {store.product_store}</li>;
//  }
//    // return <p> {console.log('prices', Object.values(store))} </p>
//  })}

// 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`

 class CompareCard extends React.Component {
   // state = {
   //   product_compare: [],
   //   objKeys: [],
   // };
   //
   // componentDidMount(){
   //   console.log('inside did mount')
   //   console.log('prop', this.props.product_id)
   //   fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
   //     .then(response => response.json())
   //     .then(jsonResp => this.setState({product_compare: jsonResp.data.stores}));
   //
   //  }


          // {this.state.product_compare.map((product_comp, index) => (
        //   {this.state.product_compare.map((product_compare, index) => (
        //       <tr>
        //           <td>{product_compare}</td>
        //           <p> &nbsp;</p>
        //     </tr>
        //
        // ))}

//         <table>
// //         {Object.values(this.props.compare_detail).map((storeObj, index) => {
// //             for (let key of Object.keys(storeObj)) {
// //                 console.log('key', key)
// //                 let store = storeObj[key];
// //                console.log('store key', storeObj[key])
// //             if(store.length === 0){
// //                return <li> {key.charAt(0).toUpperCase() + key.slice(1)}: No Data Available </li>;
// //             }
// //       return <li> <strong> {store.product_store.charAt(0).toUpperCase() + store.product_store.slice(1)}: ${(store.product_price/70).toFixed(2)} dollars </strong> </li>;
// //       // console.log('store name', store.product_store, 'price', store.product_price)
// //     }
// //   // return <p> {console.log('prices', Object.values(store))} </p>
// // })}
//         </table>

    render() {
           return(
             <div>
                    <th>Prices</th>
                     <table>
               {Object.values(this.props.compare_detail).map((storeObj, index) => {
                   console.log('compare_detail inside render compareCard', this.props.compare_detail)
                   for (let key of Object.keys(storeObj)) {
                       // console.log('key', key)
                       let store = storeObj[key];
                      console.log('store', storeObj[key])
                   if(store.length === 0){
                      return <li> {key.charAt(0).toUpperCase() + key.slice(1)}: No Data Available </li>;
                   }
                   console.log('product_store', store.product_store)
               return <li> <strong> {store.product_store.charAt(0).toUpperCase() + store.product_store.slice(1)}: ${(store.product_price/70).toFixed(2)} dollars </strong> </li>;
              console.log('store name', store.product_store, 'price', store.product_price)
           }
            // return <p> {Object.values(store)} </p>
       })}
               </table>

//
                {console.log("Inside return",this.props.compare_detail)}
             </div>

         )
     }

}


 export default CompareCard
