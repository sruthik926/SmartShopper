import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import About from './About'
import NavBar from './NavBar'
import Contact from '../Components/Contact'
import TopSearches from './TopSearches'
import SearchContainer from '../Containers/SearchContainer'
import {fetchTopSearches} from '../actions/fetchTopSearches.js'
import {fetchallSearchTerms} from '../actions/fetchallSearchTerms.js'
import { connect } from 'react-redux'

//imported all the required components - in order to render within the app component.

class App extends React.Component {

  componentDidMount(){
      this.props.fetchallSearchTerms();
      this.props.fetchTopSearches();
      console.log('comp did Mount', this.props.fetchallSearchTerms())
      console.log('comp did mount')
  }

 render() {
      console.log('before fetch')
      console.log('Inside App', this.props.all_searches)
   return (
     <div>
     <header className="App-header">
              <BrowserRouter>
              <NavBar/>
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Search" component={SearchContainer}/>
              <Route exact path="/TopSearches" render={()=><TopSearches allSearchTerms={this.props.allSearchTerms} topSearches={this.props.topSearches}/>}/>
              </BrowserRouter>
      </header>
     </div>

   )
 }
}

const mapStateToProps = state => {
  console.log('state', state)
  return (
    {
     allSearchTerms: state.allSearchTermsReducer.allSearchTerms,
     topSearches: state.topSearchReducer.topSearches
    }
  )
}


// Router component being invoked within App, NavBar is being invoked, seen within app component - It is setting the routes for the About, Contact, SearchContainer and TopSearches components
//when we type /About in the url bar, we will be taken to the About Component, it's the same concept for the SearchContsiner, Contact and TopSearches components. Yhe only difference is the route -

export default connect(mapStateToProps, {fetchallSearchTerms, fetchTopSearches})(App);

// Export default - set so that App component can be rendered within other components -
