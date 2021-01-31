import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/main.scss'

// Pages
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
