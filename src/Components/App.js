import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './About'
// import TopSearches from './TopSearches'
// import Categories from './Categories'
import NavBar from './NavBar'
// import DropDown from './DropDown'
import Contact from '../Components/Contact'
import TopSearches from './TopSearches'
import SearchContainer from '../Containers/SearchContainer'




// function App() {
//   return (
//     <div>
//        <header className="App-header">
//         <Router>
//          <NavBar/>
//         <Route exact path="/About" component={About} />
//         <Route exact path="/Contact" component={Contact} />
//         <Route exact path="/Search" component={SearchContainer}/>
//          </Router>
//        </header>
//     </div>
//   );
// }
class App extends React.Component {
  // componentDidMount(){
  //   fetch('http://localhost:3001/api/v1/top_searches')
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log('search Data', jsonResp));
  // }

    // this.setState({product_details: jsonResp.data.main_specs}));//
  // conso

  // componentDidMount(){
  //   console.log('inside did mount')
  //   console.log('prop', this.props.product_id)
  //   fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //     .then(response => response.json())
  //     .then(jsonResp => this.setState({temp: jsonResp.data}),
  //       console.log('setState', this.state.temp)
  //    );
  //    // console.log('product_compare', this.state.product_compare)
  //    fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //      .then(response => response.json())
  //      .then(jsonResp => this.setState({temp: jsonResp.data}),
  //        console.log('setState', this.state.temp)
  //     );
      // c

    // }

 render() {

   return (
     <div>
     <header className="App-header">
              <Router>
              <NavBar/>
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Search" component={SearchContainer}/>
              <Route exact path="/TopSearches" component={TopSearches}/>
              </Router>
              </header>
     </div>

   )
 }
}



export default App;
