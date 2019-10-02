export function insertSearch(searchTerm) {
  console.log("Search term inside atcion",searchTerm)
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/searches?searchterm='+searchTerm, {
        headers: {
          'Content-Type': 'application/json',  //headers - tells y9ou that it is json
        },
        method:'POST',
        body: JSON.stringify(searchTerm)          //stringifies searchTerm 
      })
     }
   }

//post request being made -slightly different than the others, which are all get requests - passing a searxhTerm -
