import React from 'react'
import { Navbar, Footer } from './components'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
