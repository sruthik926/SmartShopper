import React from 'react'


 class CompareCard extends React.Component {

    render() {
      // console.log("Inside return",this.props.compare_detail)
        return (
            <div>
              <th>Prices</th>
                <table>
                  {this.props.compare_detail.data && Object.values(this.props.compare_detail.data.stores).map((storeObj, index) => {
              //      console.log('compare_detail inside render compareCard', this.props.compare_detail)
                    for(let key of Object.keys(storeObj)) {
                //    console.log('key', key)
                      let store = storeObj[key];
                //    console.log('store', storeObj[key])
                      if(store.length === 0){
                        return <li> {key.charAt(0).toUpperCase() + key.slice(1)}: No Data Available </li>;
                      }
                      // console.log('product_store', store.product_store)
                        return <li> <strong> {store.product_store.charAt(0).toUpperCase() + store.product_store.slice(1)}: ${(store.product_price/70).toFixed(2)} dollars </strong> </li>;
                      // console.log('store name', store.product_store, 'price', store.product_price)
                      }
                  })}
                </table>
            </div>
          )
        }
 }

//Another presentational component which receives props fron the Itemn component - renders the price comparison details of an item

 export default CompareCard
