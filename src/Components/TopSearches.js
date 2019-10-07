import React from 'react'
import { connect } from 'react-redux'
import {fetchTopSearches} from '../actions/fetchTopSearches.js'
import {allSearches} from '../actions/allSearches.js'
import { Link, Route, HashRouter } from "react-router-dom";
import Search from './Searches'

//connecting the TopSearch component to Redux store using connect.


class TopSearches extends React.Component {


  componentDidMount(){

    console.log('inside did mount')
    this.props.fetchTopSearches();
    // console.log('fetchTopSearches', this.props.fetchTopSearches())
    this.props.allSearches();
    // console.log('allsearches', this.props.allSearches())

    //invoking the fetchTopSearches action creator withih ComponentDidMount-  ComponentDidMount is a LifeCycle method - where API calls are typically made.

  }
  //
  // handleSearches = event => {
  //     this.props.allSearches()
  // }



  render() {
    // this.convertToArrayofObject();
   // console.log('newArr', this.state.arr)
    console.log('topsearches', this.props.topSearches)
    console.log('searches', this.props.topSearches)
    return(
      <div className="topsearches">
       <table border="2" align="center">
         <thead>
           <th> Search Term </th>
           <th>Count </th>
         </thead>
         <tbody>
           {this.props.topSearches.map(top_search =>
             Object.keys(top_search).map(key => {
               return (
                 <tr>
                   <td>{key}</td>
                   <td>{top_search[key]}</td>
                 </tr>
               );
             })
           )}
         </tbody>
       </table>
       <HashRouter>
           <p><Link to='/searches'> All Searches </Link></p>
             <Route exact path='/searches' render={()=><Search all_searches={this.props.getAllSearches}/>}/>
       </HashRouter>
     </div>
     )
   }
 }

//mapStateToProps  - return updated state of topSearched and being passed as prop-

const mapStateToProps = state => {
  return (
    {topSearches: state.topSearchReducer.topSearches,
     allSearches: state.allSearchesReducer.allSearches
    }
  )
}


export default connect(mapStateToProps, {fetchTopSearches, allSearches})(TopSearches);
//connecting the store and topSearch component - passing mapStateToProps as a parameter, and action creator - dispatch takes place- more elegent way fo dispatching
