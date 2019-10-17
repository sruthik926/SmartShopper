import React from 'react'
import { connect } from 'react-redux'
import {fetchTopSearches} from '../actions/fetchTopSearches.js'
import {fetchallSearchTerms} from '../actions/fetchallSearchTerms.js'
import { Link, Route, BrowserRouter } from "react-router-dom";
import Search from './Searches'

//connecting the TopSearch component to Redux store using connect.

class TopSearches extends React.Component {

  render() {
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
       <BrowserRouter>
           <p><Link to='/searches'> All Searches </Link></p>
             <Route exact path='/searches' render={()=><Search allSearchTerms={this.props.allSearchTerms}/>}/>
       </BrowserRouter>
     </div>
     )
   }
}
//mapStateToProps  - return updated state of topSearched and being passed as prop-

// const mapStateToProps = state => {
//   return (
//     {topSearches: state.topSearchReducer.topSearches,
//     }
//   )
// }


export default TopSearches
//connecting the store and topSearch component - passing mapStateToProps as a parameter, and action creator - dispatch takes place- more elegent way fo dispatching
