import React from 'react'
import { Button} from 'reactstrap';
import '../App.css'
import ItemContainer from '../Containers/ItemContainer'
import '../Item.css'
import { connect } from 'react-redux'
import {fetchItems} from '../actions/fetchItems.js'
import {insertSearchTerm} from '../actions/insertSearchTerm.js'


class SearchContainer extends React.Component {
    state = {
      isClicked: false
    }

    handleSearchInputChange = event => {
      this.setState({
      searchTerm: event.target.value,
    });
  }
   //handleSearchInputChange - evemt handler - passes an event  - onChane in this case - as a param and changes the searchTerm - as it changes

  handleSubmit= event =>{
    event.preventDefault();
      this.setState({
        isClicked: true
     });
    this.props.fetchItems(this.state.searchTerm);
    console.log('A');
    if(this.state.searchTerm)
      this.props.insertSearchTerm(this.state.searchTerm);
    console.log('B');
  }

//handleSubmit - another eventhandler - passes in an event as a param - which is onSubmit - and invokes the two action creators - and passes searchTerm

  render() {
    console.log("Searched Items",this.props.searches)

    return (

      <div>
       <form onSubmit={this.handleSubmit}>
          <input id="searchterm" name="searchterm" type="text" placeholder="Search Item" onChange={this.handleSearchInputChange}/>
             <Button type="submit" color="primary"  className="text-center" size="sm">Search</Button>
         </form>
          <div>
             <ItemContainer items={this.props.searches.data} isClicked={this.state.isClicked}/>
           </div>
        </div>

    );
  }
}

//holds the form - search button and input - uses Button component for the search button
//Invokes the ItemContainer component within SearchContainer and passes the search data as a prop which comes from the mapStateToProps

const mapStateToProps = state => {
  return (
    {searches: state.itemsReducer.searches
    }
  )
}
// returns searchdata from Redux store -

const mapDispatchToProps = dispatch => ({
  fetchItems: searchTerm => dispatch(fetchItems(searchTerm)),
  insertSearchTerm: searchTerm => dispatch(insertSearchTerm(searchTerm))
})

//Dispatch these two action creators -


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
//connecting SearchContainer with Redux store, - passes two parameters mapStateToProps and mapDispatchToProps
