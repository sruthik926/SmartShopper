import React from 'react'
import { connect } from 'react-redux'
// import '../reducers/top_search.js'

import {fetchTopSearches} from '../actions/fetchTopSearches.js'
// import './App.css'



class TopSearches extends React.Component {

  componentDidMount(){
    {console.log('inside did mount')}
    this.props.fetchTopSearches()

  }


    // {Object.keys(top_search).map(function(key) {
    //   return
    //   <tr>
    //     <td width="650"> {key} </td>
    //     <td width="300"> {top_search[key]} </td> ;
    //   </tr>
    //
    // })}

                        // {this.props.topSearches.map((top_search, index) => (
                        //
                        //
                        //   ))}

                        // {Object.keys(top_search).map(function(key) {
                        //        console.log("key",{key})
                        //        console.log("top-search", {top_search[key]});

  render() {
    return(
      <div className="topsearches">
         <table border="2" align="center">
           <thead>
             <th> Search Term </th>
             <th>Count </th>
           </thead>
           <tbody>
             {this.props.topSearches.map((top_search, index) => (
               <tr>
                 {Object.keys(top_search).map(function(key) {
                   return <td>{top_search[key]}</td>;

                 })}
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     )
   }
 }


const mapStateToProps = state => {
  return (
    {topSearches: state.topSearchReducer.topSearches}
  )
}

export default connect(mapStateToProps, {fetchTopSearches})(TopSearches)
