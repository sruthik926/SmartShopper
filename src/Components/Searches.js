import React from 'react'



class Search extends React.Component {


  // {this.props.all_searches.map((search, index) => (
  //     <tr>
  //         <td>{search}</td>
  //         <p> &nbsp;</p>
  //     </tr>
  // ))}


 render() {
        return(

          <div>
              <table>
              <th>All Searches </th>
              {console.log('Inside Search comp', this.props.all_searches)}
              </table>
          </div>
      )
  }

}



export default Search
