import React from 'react'
import { Navbar } from './components'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
