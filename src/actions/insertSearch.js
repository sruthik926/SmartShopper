export function insertSearch(searchTerm) {
  console.log("Search term inside atcion",searchTerm)
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/searches?searchterm='+searchTerm, {
        headers: {
          'Content-Type': 'application/json',
        },
        method:'POST',
        body: JSON.stringify(searchTerm)
      })
     }
   }
