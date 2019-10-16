export function insertSearchTerm(searchTerm) {
  console.log('C')
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/searches?searchterm='+ searchTerm, {
        headers: {
          'Content-Type':'application/json',  //headers - tells y9ou that it is json
        },
        method:'POST',
        body: JSON.stringify(searchTerm)          //stringifies searchTerm
      }).then(res => res.json())
        .then(data => {
            dispatch({
               type:'INSERT_SEARCH_TERM',
               searchTerm: searchTerm,
               res: data
            })
          }
        )
      }
     console.log('E')
   }

//post request being made -slightly different than the others, which are all get requests - passing a searxhTerm -
