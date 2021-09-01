import React from 'react'
import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import BookList from './BookList'
import NewBook from './NewBook'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/library">
              <BookList />
            </Route>
            <Route exact path='/new'>
              <NewBook />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
