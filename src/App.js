import React from 'react'
import { Navbar, Footer } from './components'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
