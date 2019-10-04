import React from 'react'
import { connect } from 'react-redux'
import {fetchTopSearches} from '../actions/fetchTopSearches.js'

//connecting the TopSearch component to Redux store using connect.


class TopSearches extends React.Component {
    state = {
      arr: []
    }

    //having local state - to store top_searches - array of objects

  componentDidMount(){

    console.log('inside did mount')
    this.props.fetchTopSearches();

    //invoking the fetchTopSearches action creator withih ComponentDidMount-  ComponentDidMount is a LifeCycle method - where API calls are typically made.

  }

  // convertToArrayofObject(){
  //       this.state.arr = [];
  //       console.log("prop",this.props.topSearches)
  //       Object.keys(this.props.topSearches).forEach((key) => {
  //           var newObj = {};
  //           newObj[key] = this.props.topSearches[key];
  //           this.state.arr.push(newObj);
  //       });
  //    // this function converts an array of one object into an array of multiple objects
  //
  // }

  //invoking the convertToArrayofObject method -
  //Map of that array of multiple objects

  render() {
    // this.convertToArrayofObject();
   // console.log('newArr', this.state.arr)
    console.log('topsearches', this.props.topSearches)
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
     </div>
     )
   }
 }

//mapStateToProps  - return updated state of topSearched and being passed as prop-

const mapStateToProps = state => {
  return (
    {topSearches: state.topSearchReducer.topSearches}
  )
}

export default connect(mapStateToProps, {fetchTopSearches})(TopSearches)
//connecting the store and topSearch component - passing mapStateToProps as a parameter, and action creator - dispatch takes place- more elegent way fo dispatching
