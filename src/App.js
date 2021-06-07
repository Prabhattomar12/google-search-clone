import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import SearchResult from './Components/SearchPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchResult />
          </Route>
          <Route path='/'>
            <Home  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
