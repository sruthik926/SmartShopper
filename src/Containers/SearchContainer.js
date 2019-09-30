import React from 'react'
import { Button} from 'reactstrap';
import '../App.css'
import ItemContainer from '../Containers/ItemContainer'
import '../Item.css'
import { connect } from 'react-redux'
import {fetchSearches} from '../actions/fetchSearches.js'
import {insertSearch} from '../actions/insertSearch.js'
// import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
    // <Item items={this.state.items}  />
          // <Item items={this.props.searches.data}/>

//const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
//const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;

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
    this.props.insertSearch(this.state.searchTerm)
  }


  render() {
    console.log("Searched Items",this.props.searches)

    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="searchterm" name="searchterm" type="text" placeholder="Search Item" onChange={this.handleSearchInputChange}/>
             <Button type="submit" color="primary"  className="text-center" size="sm">Search</Button>
         </form>
          <div>
             <ItemContainer items={this.props.searches.data}/>
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

const mapDispatchToProps = dispatch => ({
  fetchSearches: searchTerm => dispatch(fetchSearches(searchTerm)),
  insertSearch: searchTerm => dispatch(insertSearch(searchTerm))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
