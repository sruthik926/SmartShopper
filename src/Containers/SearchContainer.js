import React from 'react'
import { Button} from 'reactstrap';
import '../App.css'
import Item from '../Item'
import '../Item.css'
import { connect } from 'react-redux'
import {fetchSearches} from '../actions/fetchSearches.js'
// import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
    // <Item items={this.state.items}  />
          // <Item items={this.props.searches.data}/>

const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;

// this.state.itemDetails.push(jsonResp.data.main_specs))));

class SearchContainer extends React.Component {
    handleSearchInputChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit= event =>{
    event.preventDefault();
    this.props.fetchSearches(this.state.searchTerm);
  // fetch(BASE_URL.concat(this.state.searchTerm))
  //   .then(response => response.json())
  //
  //   .then(jsonResp => this.setState({items: jsonResp.data}));
    // console.log('URL',BASE_URL.concat(this.state.searchTerm))
    // console.log('After Handle Subimt/fetch',this.state.items)
    // console.log('Creating Item Detail')


  }

 // generateItemDetail(){
 //
 //    {this.state.items.map((item, index) => (
 //
 //    fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${item.product_id}`)
 //     .then(response => response.json())
 //
 //     .then(jsonResp => this.state.itemDetails.(jsonResp.data))));
 //   };


// }
 //generateItemDetail
// map thru item array and for each item id append the item deails to the itemdeail array
// this.state.ItemDetail.push = whatever u get from the secon api for a give itemi

  render() {

    //const arr = [ <br />, <br/>];
    // Generate Item deail array( call function)
    //<p>{arr}</p>
    //<input id="searchterm" name="searchterm" type="text" placeholder="Search Item"  onChange={this.handleSearchInputChange}/>
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="searchterm" name="searchterm" type="text" placeholder="Search Item"  onChange={this.handleSearchInputChange}/>
             <Button type="submit" color="primary"  className="text-center" size="sm">Search</Button>
         </form>
          <div>
             <Item items={this.props.searches.data} />
          </div>
        </div>

    );
  }
}

const mapStateToProps = state => {
  return (
    {searches: state.searchReducer.searches}
  )
}


export default connect(mapStateToProps, {fetchSearches})(SearchContainer);
