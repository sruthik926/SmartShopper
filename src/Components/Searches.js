import React from 'react'



class Search extends React.Component {
  
 render() {
        return(
          <div>
          <table border="1" align="center">
            <thead>
              <th> Search Term </th>
              <th> Search Date & Time </th>
            </thead>
            <tbody>
            {this.props.all_searches.map((search, index) => (
                <tr>
                    <td>{search['searchterm']}</td>
                    <td>{search['created_at']}</td>
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
