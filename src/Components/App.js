import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './About'
import NavBar from './NavBar'
import Contact from '../Components/Contact'
import TopSearches from './TopSearches'
import SearchContainer from '../Containers/SearchContainer'

//imported all the required components - in order to render within the app component.

class App extends React.Component {

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

// Router component being invoked within App, NavBar is being invoked, seen within app component - It is setting the routes for the About, Contact, SearchContainer and TopSearches components
//when we type /About in the url bar, we will be taken to the About Component, it's the same concept for the SearchContsiner, Contact and TopSearches components. Yhe only difference is the route -

export default App;

// Export default - set so that App component can be rendered within other components -
