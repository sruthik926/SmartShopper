import React from 'react'



class Search extends React.Component {
  // {this.props.all_searches.map((search, index) => (
  //     <tr>
  //         <td>{search}</td>
  //         <p> &nbsp;</p>
  //     </tr>
  // ))}

  // <table>
  // <th>  All Searches </th>
  //
  // {console.log('Inside Search comp', this.props.all_searches)}
  // {this.props.all_searches.map((searchObj) => (
  //     <li> {console.log('searchObj', searchObj)}</li>
  //
  // ))}
  //
  // </table>




 render() {
        return(
          <div>
          <table border="2" align="center">
            <thead>
              <th> All Searches </th>
            </thead>
            <tbody>
            {this.props.all_searches.map((search, index) => (
                <tr>
                    <td>{search['searchterm']}</td>
                    <p> &nbsp;</p>
                </tr>
             ))}
            </tbody>
          </table>
          </div>
      )
  }

}



export default Search
