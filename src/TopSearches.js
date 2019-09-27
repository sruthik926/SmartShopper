import React from 'react'
import { connect } from 'react-redux'
// import '../reducers/top_search.js'

import {fetchTopSearches} from './actions/fetchTopSearches.js'
import './App.css'

//  {this.props.topSearches.map((top_search, index) => (
//       <tr>
//         <td>{Object.keys(top_search).map(function(key) {
//           return <div> {key} {top_search[key]}  </div>;
//           })}
//         </td>
//           <p> &nbsp;</p>
//     </tr>
// ))}

class TopSearches extends React.Component {

  componentDidMount(){
    {console.log('inside did mount')}
    this.props.fetchTopSearches()

  }

  render() {
         return(
           <div className="topsearches">
             <th> Search Term Count </th>
              {this.props.topSearches.map((top_search, index) => (
                   <tr>
                     <td>{Object.keys(top_search).map(function(key) {
                       return <div> {key} {top_search[key]}  </div>;
                       })}
                     </td>
                       <p> &nbsp;</p>
                 </tr>
             ))}
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
