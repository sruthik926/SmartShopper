import React from 'react'
import { Button} from 'reactstrap';


 class CompareCard extends React.Component {
    state = {
      renderedData: [],
      sortClicked: false
   }

   componentWillReceiveProps(nextProps) {
      this.setState({sortClicked: false});

    }

    handleClick = () => {
      console.log('Hello!');
      let newState = this.props.compare_detail.data['stores'].slice();
       console.log('newState', newState);

        newState.sort(function(a, b) {
        var nameA =  Object.keys(a)[0].toUpperCase(); // ignore upper and lowercase
        var nameB =  Object.keys(b)[0].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });

       this.setState({renderedData: newState,
                      sortClicked: true
       });
    }


    render() {
      console.log('SortCLicked',this.state.sortClicked)
      if (this.state.sortClicked) {
        return (
            <div>
              <th>Prices</th>
                <table>
                  {this.props.compare_detail.data && Object.values(this.state.renderedData).map((storeObj, index) => {
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
                   <Button type="submit" color="primary" className="text-center" size="sm" onClick={this.handleClick}> Sort Company List from A-Z</Button>
            </div>
          )

      }
       else {
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
                    <Button type="submit" color="primary" className="text-center" size="sm" onClick={this.handleClick}> Sort Company List from A-Z</Button>
             </div>
           )
       }

    }
 }

//Another presentational component which receives props fron the Itemn component - renders the price comparison details of an item

 export default CompareCard
