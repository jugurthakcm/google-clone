import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <div>This is the search page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
