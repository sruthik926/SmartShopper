import React from 'react'
import { connect } from 'react-redux'
// import '../reducers/top_search.js'

import {fetchTopSearches} from '../actions/fetchTopSearches.js'
// import './App.css'


class TopSearches extends React.Component {
    state = {
      arr: []
    }

  componentDidMount(){

    {console.log('inside did mount')}
    this.props.fetchTopSearches();
    // this.convertToArrayofObject();

  }

  convertToArrayofObject(){
        this.state.arr = [];
        console.log("prop",this.props.topSearches)
        Object.keys(this.props.topSearches).forEach((key) => {
            var newObj = {};
            newObj[key] = this.props.topSearches[key];
            // console.log('newObj', newObj)
            this.state.arr.push(newObj);
        });



  }

  render() {
    this.convertToArrayofObject();
   console.log('newArr', this.state.arr)
    return(
      <div className="topsearches">
         <table border="2" align="center">
           <thead>
             <th> Search Term </th>
             <th>Count </th>
           </thead>
           <tbody>
             {this.state.arr.map((top_search, index) => (
               <tr>
                 <td>{Object.keys(top_search)[0]}</td>
                 <td>{Object.values(top_search)[0]}</td>
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
